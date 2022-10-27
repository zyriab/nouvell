<p align="center"><img
  src="https://www.wallenart.dev/src/images/nouvell.svg"
  alt="nouvell logo" /></p>
 
 <p align="center">
 <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/ZyriabDsgn/nouvell">
<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/zyriabdsgn/nouvell">
<img alt="GitHub" src="https://img.shields.io/github/license/zyriabdsgn/nouvell">
</p>

A fast-prototyped, scalable and maintainable minimalist newsletter miniservice API leveraging GraphQL, Mongoose/MongoDB and AWS Lambda.

## Installation

_This guide assumes you have basic knowledge about NPM (also that it's installed) and possess AWS._

Automatic CI/CD using GH Actions is not covered in this readme.

First you need to clone this repo, then you can follow along the instructions below 😉

### MongoDB

You can create a MongoDB database on MongoDB Atlas.  
More information [here](https://www.mongodb.com/docs/atlas/getting-started/)

### AWS Lambda

These are the steps to set up a Lambda function in order to host the API.

1. Go to the AWS console and log in.
2. Go to the Lambda functions console and create a new function.
3. Set the following settings:

   - Function name: `nouvell` (you can call it whatever you want, but the workflows are set up for this name, if you decide to go this route).
   - Runtime: Node.js
   - Architecture: x86_64
   - Advanced settings:
     - Check: "Enable function URL".
     - Auth type: "NONE".
     - Check "Configure cross-origin resource sharing (CORS)"

4. In the tab "Configuration":

   - Function URL: click "Edit" on the top-right.
     - Allow origin: You can add your domains (one per line) or keep the wildcard character (\*) in order to allow all origins (not recommended)
     - Under "Allow headers", click "Add new value" and type in `content-type` and `authorization`.
     - Under "Allow methods", check "POST".

5. In the "Environment variables" menu section (on the left):

   - Click "Edit" then "Add environment variable"
   - Add the following:
     - Key: `NODE_ENV`
     - Value: `production`
     - Key: `AES_KEY`
     - Value: A randomly generated AES key
     - Key: `MONGODB_URI`
     - Value: The URI to your database
     - Key: `EDIT_SUBSCRIBER_URL`
     - Value: The URL to your endpoint where the query `removeSubscriber` will be called (`?email=xxxx` will be automatically appended)

6. Don't forget to note the function URL, we'll use it to call the API from the frontend.

### API directory

These are the steps to automatically bundle the API's code in one big JS file and deploy it manually on Lambda. You can also use AWS CLI or automate the deployment when you push your code on your GitHub repo, by using the included action `deploy.yml` but that's outside the scope of this readme, feel free to do some research about it (most of the work is already done).

1. In your terminal, go the project's directory.
2. Run the command `npm i` in order to install all the project's dependencies.
3. Run `npm run build`.
4. Move the file `index.js` from the newly created `dist/` folder to the root folder of the project.
5. Select the file `index.js` and compress it into a .zip file.
6. Go back to the AWS Lambda function dashboard.
7. In the "Code" tab (top-right of the editor), select "Upload from > .zip file" and upload the .zip file.

## Usage

You can now call the Lambda URL, passing your query as a POST request (see example below).

You can find the queries and mutations in `nouvell/src/schema/schema.graphql`.  
(gqlSchema.ts is pasted from that file in order to comply with `ncc`'s limitations).

You can find the already implemented queries and mutations in `nouvell/src/resolvers/[queries | mutations]`.

If you want to test the API locally you can run `npm run dev` in the API's directory and check the debug console for any error, don't forget to create a `.env` file (or remove the "example" from `.env.example`) and put in the following lines:

- `NODE_ENV=development`
- `PORT=3000` <-- Feel free to change this value if this port is already in use.
- `AES_KEY=your_aes_key`
- `MONGODB_URI=your_mongodb_uri`
- `EDIT_SUBSCRIBER_URL=your_url`

Here is an example of an API call to add a user with TypeScript and the fetch API:

```ts
interface AddSubscriberArgs {
  email: string;
  products: [{ name: string }];
  occupation: {
    name: string;
    displayName?: string;
  };
  language?: string;
}

async function addSubscriber(args: AddSubscriberArgs) {
  try {
    const query = {
      query: `
        mutation AddSub(
          $email: String!
          $products: [ProductInput!]!
          $occupation: OccupationInput!
          $language: String!
        ) {
          addSubscriber(
            subscriberInput: {
              email: $email
              products: $products
              occupation: $occupation
              language: $language
            }
          ) {
            __typename
            ... on Subscriber {
              email
              products {
                name
                category
                displayName
              }
              occupation {
                name
                displayName
              }
              language
            }
            ... on WrongEmailFormat {
              message
            }
            ... on ServerError {
              message
              stack
            }
          }
        }
      `,
      variables: {
        email: args.email,
        products: args.products,
        occupation: args.occupation,
        language: args.language,
      },
    };

    const res = await fetch('https://your_lambda_url.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
    });

    const resData = await res.json();
    const typename = resData.data.addSubscriber.__typename;

    if (typename === 'Subscriber') {
      return resData.data.addSubscriber;
    }

    throw new Error(resData.data.addSubscriber.message);
  } catch (e) {
    console.log(e);
    return undefined;
  }

  // Somewhere else in the code...

  const subscriber = await addSubscriber({
    email: 'example@email.com',
    products: [{name: 'some-product'}], // product has to exist in DB!
    occupation: {name: 'merchant', displayName: 'Merchant'}, // if undefined, name will be used as displayName
    language: 'fr', // if undefined, defaults to 'en'. Language has to exist in DB!
  }):

  if(subscriber != null) {
    console.log(subscriber);
    
    // subscriber: {
		// 	__typename: 'Subscriber',
		// 	email: 'example@email.com',
		// 	products: [
		// 		{
		// 			name: 'some-product',
		// 			category: 'the-category',
		// 			displayName: 'Some Product',
		// 		}
		// 	],
		// 	occupation: {
		// 		name: 'merchant',
		// 		displayName: 'Merchant'
		// 	},
		// 	language: 'fr',
		// }
	}
  }
}
```

## Contributing

Feel free to send a PR, this is a small side project (WIP) and if you spot any error in the code or README, I would appreciate your help 🙂

## License

This software is under the [MIT](https://choosealicense.com/licenses/mit/) license, a short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. (Do whatever you want with it 🤙).
