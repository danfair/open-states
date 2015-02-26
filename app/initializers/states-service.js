export function initialize(container, application) {
  application.inject('route', 'statesService', 'service:states');
  application.inject('controller', 'statesService', 'service:states');
}

export default {
  name: 'legislators/states-service',
  initialize: initialize
};
