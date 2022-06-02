import { DbSearchEmail, DbSearchEmailSpace } from '@/sdk/api/infra/database';

export const SearchEmailUseCase = ({
  email,
}: DbSearchEmailSpace.Params): Promise<DbSearchEmailSpace.Result> => {
  const emailWithoutDomain = email.split(`@`)[0];

  return DbSearchEmail({ email: emailWithoutDomain });
};
