import { Poppins } from "next/font/google";
import { footer } from "../_data/footerData";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

function Footer() {
  return (
    <div className="m-3 flex flex-row justify-between">
      <div className={poppins.className}>
        <span className="mr-2">Nanda Kumar B</span>
        <span>2025</span>
      </div>
      <div className="flex flex-row gap-5">
        {footer.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <item.icon className="text-2xl hover:opacity-75" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Footer;
