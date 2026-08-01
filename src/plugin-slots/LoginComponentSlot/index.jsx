import { PluginSlot } from '@openedx/frontend-plugin-framework';
import PropTypes from 'prop-types';

import LoginPage from '../../login/LoginPage';

const LoginComponentSlot = ({
  institutionLogin,
  handleInstitutionLogin,
  isAdminLogin,
}) => (
  <PluginSlot
      id="org.openedx.frontend.authn.login_component.v1"
      pluginProps={{
          isInstitutionLogin: institutionLogin,
          setInstitutionLogin: handleInstitutionLogin,
        }}
    >
      <LoginPage
          institutionLogin={institutionLogin}
          handleInstitutionLogin={handleInstitutionLogin}
          isAdminLogin={isAdminLogin}
        />
    </PluginSlot>
);

LoginComponentSlot.propTypes = {
  institutionLogin: PropTypes.bool,
  handleInstitutionLogin: PropTypes.func,
  isAdminLogin: PropTypes.bool,
};

LoginComponentSlot.defaultProps = {
  isAdminLogin: false,
};

export default LoginComponentSlot;
