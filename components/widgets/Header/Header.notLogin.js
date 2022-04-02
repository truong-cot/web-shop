import Button from "../../control/Button";
import Link from "next/link";

function HeaderNotLogin() {
  return (
    <div>
      <Link href="/login">
        <a>
          <Button light rounded>
            Đăng nhập
          </Button>
        </a>
      </Link>

      <Link href="/signup">
        <a>
          <Button primary rounded>
            Đăng kí
          </Button>
        </a>
      </Link>
    </div>
  );
}

export default HeaderNotLogin;
