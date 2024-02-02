import { Section } from 'components/styles/Container.styled';
import { Outlet } from 'react-router';
import { Header } from '../components/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <Section>
        <Outlet />
      </Section>
    </>
  );
}
