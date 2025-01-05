import { useSelector } from 'react-redux';
import { AuthModule } from '_store/src/modules';

interface IPermissionHooks {
  hasModuleAccess: (moduleName: string) => boolean;
  hasFeatureAccess: (moduleName: string, featureName: string) => boolean;
}

const usePermission = (): IPermissionHooks => {
  const currentUser = useSelector(AuthModule.selectors.getAuthUserSelector);
  const permissions = currentUser?.permissions || [];
  const featurePermissions = currentUser?.permissionsFeatures || [];

  /**
   * Check if the user has access to the specified module
   * @param moduleName
   */
  function hasModuleAccess(moduleName: string) {
    return permissions.some(
      perm => perm.moduleName === moduleName && perm.canAccess,
    );
  }

  /**
   * Check if the user has access to the specified feature
   * @param moduleName
   * @param featureName
   */
  function hasFeatureAccess(moduleName: string, featureName: string) {
    const permissionModule = permissions.find(
      perm => perm.moduleName === moduleName && perm.canAccess,
    );
    if (permissionModule) {
      return featurePermissions.some(
        perm => perm.featureName === featureName && perm.canExecute,
      );
    }
    return false;
  }

  return { hasModuleAccess, hasFeatureAccess };
};

export default usePermission;
