import { Occupation } from '../../definitions/generated/graphql';
import { Occupation as OccupationModel } from '../../models/models';

export default async function isOccupationExisting(occupation: Occupation) {
  return (
    (await OccupationModel.exists({ name: occupation.name.toLowerCase() })) !=
    null
  );
}
