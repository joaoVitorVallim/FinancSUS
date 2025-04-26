import { defineAsyncComponent } from 'vue'

export default function registerGlobalComponents(app) {
  const components = import.meta.glob('./components/shared/*.vue')

  for (const [path, definition] of Object.entries(components)) {
    const componentName = path.split('/').pop().replace('.vue', '') 
    app.component(componentName, defineAsyncComponent(definition))
  }
}