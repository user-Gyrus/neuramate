import Image from "next/image";
import Link from "next/link";

function Header({ orbitronClass }) {
  return (
    <div className="flex justify-between flex-row items-center p-4">
      {/* Left section */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/image.png"
            alt="NeuraMate Logo"
            width={40}
            height={40}
            className="inline-block m-1 bg-white rounded-full"
          />
          <span className={`text-lg m-1 font-bold ${orbitronClass}`}>
            NeuraMate
          </span>
        </Link>
      </div>

      {/* Right Section */}
      <div className={`${orbitronClass}`}>
        <Link href="/accounts">Accounts</Link>
      </div>
    </div>
  );
}

export default Header;
