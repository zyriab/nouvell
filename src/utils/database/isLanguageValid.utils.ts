import { Language } from '../../models/models';

export default async function isLanguageValid(language: string) {
  return (await Language.exists({ name: language.toLowerCase() })) != null;
}
