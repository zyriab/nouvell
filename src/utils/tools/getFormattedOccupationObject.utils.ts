import { Occupation } from '../../definitions/generated/graphql';

export default function getFormattedOccupationObject(occupation: Occupation) {
  return {
    name: occupation.name.toLowerCase(),
    displayName:
      occupation.displayName != null ? occupation.displayName : occupation.name,
  };
}
