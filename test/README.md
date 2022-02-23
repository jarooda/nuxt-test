## Preparation for test

- if using jest, you can collect the coverage using `--collectCoverage` in cli

## Notes for test

- If possible, always use `shallowMount` rather than `mount` when testing `Vue` application, because it render the component with stubbed child components. So we don't need to care with other child component(s) behavior.
- You don't need to test 3rd party component/function, just think that the 3rd party is always function properly
