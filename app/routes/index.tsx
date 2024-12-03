import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  beforeLoad() {
    console.log('beforeLoad');
  }
})

function RouteComponent() {
  return <div>Hello "/"s!</div>
}
