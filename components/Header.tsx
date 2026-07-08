import Image from "next/image";
import { Container, CTAButton } from "./ui";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <a href="#topo" aria-label="Base FI">
          <Image src="/images/logo.png" alt="Base FI" width={116} height={46} priority />
        </a>
        <CTAButton className="!px-5 !py-2.5 !text-xs">Quero me inscrever</CTAButton>
      </Container>
    </header>
  );
}
