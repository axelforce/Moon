import AbstractComponent from '../../components/abstract.component';

class LoginDialog extends AbstractComponent {
  constructor() {
    super('/#/login');
  }

}
export const loginDialog = new LoginDialog();