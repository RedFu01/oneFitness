import { createRouter } from '@exponent/ex-navigation';

import WelcomeViewContainer from './welcome/WelcomeViewContainer';
import ChatViewContainer from './chat/ChatViewContainer';

export default Router = createRouter(() => ({
    welcome: () => WelcomeViewContainer,
    chat: () => ChatViewContainer
}));