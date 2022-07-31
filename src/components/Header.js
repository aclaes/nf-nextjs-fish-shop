import StyledHeader from './ui/StyledHeader';
import StyledNavigation from './ui/StyledNavigation';

export default function Header() {
  return (
    <StyledHeader>
      <StyledNavigation>
        <a href="#">Startseite</a>
        <a href="#">Produkte</a>
        <a href="#">Kategorien</a>
      </StyledNavigation>
    </StyledHeader>
  );
}
