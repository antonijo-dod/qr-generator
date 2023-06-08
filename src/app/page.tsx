import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Link href="/dashboard" className="btn btn-primary">
        Go to dashboard
      </Link>
    </div>
  );
}
