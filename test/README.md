## Notes for test

- If possible, always use `shallowMount` rather than `mount` when testing `Vue` application, because it render the component with stubbed child components. So we don't need to care with other child component(s) behavior.