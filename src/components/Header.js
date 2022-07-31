import Link from 'next/link';
import StyledHeader from './ui/StyledHeader';
import StyledNavigation from './ui/StyledNavigation';

export default function Header() {
  return (
    <StyledHeader>
      <StyledNavigation>
        <Link href="/">
          <a>Startseite</a>
        </Link>
        <Link href="/products">
          <a>Produkte</a>
        </Link>
        <Link href="/categories">
          <a>Kategorien</a>
        </Link>
      </StyledNavigation>
    </StyledHeader>
  );
}
