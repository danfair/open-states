export function initialize(container, application) {
  application.inject('route', 'statesService', 'service:states');
  application.inject('controller', 'statesService', 'service:states');
  application.inject('component', 'statesService', 'service:states');
}

export default {
  name: 'states-service',
  initialize: initialize
};
