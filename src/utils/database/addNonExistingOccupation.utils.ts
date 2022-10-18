import { Occupation } from '../../definitions/generated/graphql';
import { Occupation as OccupationModel } from '../../models/models';
import isOccupationExisting from './isOccupationExisting.utils';

export default async function addNonExistingOccupation(occupation: Occupation) {
  if (!(await isOccupationExisting(occupation))) {
    await OccupationModel.create({
      name: occupation.name.toLowerCase(),
      displayName:
        occupation.displayName != null
          ? occupation.displayName
          : occupation.name,
    });
  }
}
