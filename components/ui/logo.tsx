import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="SkillRise.me">
      <Image
        src="/images/logo-01.svg"
        alt="SkillRise.me Logo"
        width={32}
        height={32}
        priority
      />
      <span
        style={{
          fontWeight: 700,
          fontSize: 20,
          letterSpacing: "0.02em",
          color: "#222",
          fontFamily: "var(--font-sans, Montserrat, sans-serif)",
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        SkillRise
      </span>
    </Link>
  );
}
