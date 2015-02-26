export function initialize(container, application) {
  application.inject('route', 'partiesService', 'service:parties');
  application.inject('controller', 'partiesService', 'service:parties');
}

export default {
  name: 'parties-service',
  initialize: initialize
};
