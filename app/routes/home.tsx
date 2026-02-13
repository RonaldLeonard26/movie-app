import { Navbar } from '~/components/layouts/Navbar';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'iMovie' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
