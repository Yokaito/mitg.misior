import sha1 from 'sha1';

export const CryptographyAdapter =
  (): CryptographyAdapterSpace.CryptographyAdapter => {
    const hash = (password: string) => {
      return sha1(password);
    };

    const compare = (password: string, hash: string) => {
      return sha1(password) === hash;
    };

    return {
      hash,
      compare,
    };
  };

namespace CryptographyAdapterSpace {
  export type CryptographyAdapter = {
    hash: (password: string) => string;
    compare: (password: string, hash: string) => boolean;
  };
}
