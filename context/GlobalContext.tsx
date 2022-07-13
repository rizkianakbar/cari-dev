import * as React from 'react';
import toast from 'react-hot-toast';

export interface GlobalProviderProps {
  children: JSX.Element;
}

export interface GlobalStateInterface {
  preloaded: boolean;
  navIsActive: boolean;
  setNavIsActive: (value: boolean) => void;
  data: IUser;
  isLoading: boolean;
  userRef: React.RefObject<HTMLInputElement>;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
}

export interface IUser {
  avatar_url: string;
  name: string;
  login: string;
  created_at: string;
  following: number;
  followers: number;
  public_repos: number;
  bio: string;
  location: string;
  company: string;
  blog: string;
  twitter_username: string;
}

export function createCtx<GlobalStateInterface>() {
  const ctx = React.createContext<GlobalStateInterface | undefined>(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

export const [useGlobalContext, CtxProvider] =
  createCtx<GlobalStateInterface>();

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [preloaded, setIsPreloaded] = React.useState<boolean>(false);

  const userRef = React.useRef<HTMLInputElement>(null);
  const [userName, setUserName] = React.useState('rizkianakbar');
  const [data, setData] = React.useState<IUser>({} as IUser);
  const [isLoading, setLoading] = React.useState(false);

  function handleClick() {
    if (userRef.current) setUserName(userRef.current.value);
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && userRef.current) {
      setUserName(userRef.current.value);
    }
  }

  const fetchEditProfile = async (userName: string) => {
    setLoading(true);
    const url = `https://api.github.com/users/${userName}`;

    const response = await fetch(url);
    const resJson = await response.json();
    if (resJson.message !== 'Not Found') {
      const manipulated: IUser = [resJson].map((item: IUser) => {
        return {
          avatar_url: item.avatar_url,
          name: item.name,
          login: item.login,
          created_at: new Date(item.created_at).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          }),
          followers: item.followers,
          following: item.following,
          public_repos: item.public_repos,
          bio: item.bio,
          location: item.location,
          company: item.company,
          blog: item.blog,
          twitter_username: item.twitter_username,
        };
      })[0];

      setData(manipulated);
      setLoading(false);
    } else {
      toast.error(resJson.message);
    }

    setLoading(false);
  };

  React.useEffect(() => {
    if (userName) fetchEditProfile(userName);
  }, [userName]);

  React.useEffect(() => {
    setTimeout(() => {
      setIsPreloaded(true);
    }, 200);
  }, []);

  const [navIsActive, setNavIsActive] = React.useState<boolean>(false);

  const globalState: GlobalStateInterface = {
    data,
    userRef,
    isLoading,
    preloaded,
    navIsActive,
    handleClick,
    handleKeyPress,
    setNavIsActive,
  };

  return <CtxProvider value={globalState}>{children}</CtxProvider>;
};
