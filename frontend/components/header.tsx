import Link from 'next/link';
import { HEADER_NAVS } from '../settings';
import { useRouter } from 'next/router';


const ICON_MAP = {
  'Twitter': (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4813" width="100%" height="100%">
      <path
        d="M920.917333 260.096c-30.037333 13.312-62.293333 22.357333-96.085333 26.282667 34.474667-20.650667 61.098667-53.418667 73.557333-92.501333-32.256 19.114667-68.096 33.109333-106.154667 40.618667-30.549333-32.426667-73.898667-52.736-122.026667-52.736-92.330667 0-167.253333 74.922667-167.253333 167.253333 0 13.141333 1.536 25.941333 4.266667 38.058667-138.922667-6.997333-262.144-73.557333-344.746667-174.762667-14.336 24.746667-22.698667 53.418667-22.698667 84.138667 0 58.026667 29.525333 109.226667 74.410667 139.264-27.477333-0.853333-53.248-8.362667-75.776-20.992 0 0.682667 0 1.365333 0 2.048 0 81.066667 57.685333 148.650667 134.144 164.010667-13.994667 3.754667-28.842667 5.802667-44.032 5.802667-10.752 0-21.333333-1.024-31.402667-3.072 21.333333 66.389333 83.114667 114.858667 156.16 116.224-57.173333 44.885333-129.365333 71.509333-207.701333 71.509333-13.482667 0-26.794667-0.853333-39.936-2.389333 74.069333 47.445333 161.962667 75.093333 256.341333 75.093333 307.541333 0 475.818667-254.805333 475.818667-475.818667 0-7.168-0.170667-14.506667-0.512-21.674667C870.058667 323.072 898.389333 293.717333 920.917333 260.096z"
        p-id="4814" fill="#718096"></path>
    </svg>
  ),
  'Github': (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6469" width="90%" height="90%">
      <path
        d="M513.2 64C266.4 64 66.4 263.6 66 510.4c0 192.4 123.2 363.6 306 424.4 22.4 4 29.2-9.2 29.2-21.2s0.4-40.4 0-77.6c-124.4 26.8-150-58.8-150-58.8-20-51.6-49.6-65.2-49.6-65.2-40.8-27.6 2.8-27.2 2.8-27.2 44.8 3.2 68.4 46 68.4 46 40 68.4 104.4 48.4 130 37.2 4-28.8 15.6-48.8 28.4-59.6-98.8-11.6-203.2-49.6-203.2-220.8-0.8-44.4 16-87.6 46-120-4.4-11.2-20-56.8 4.4-118.4 0 0 37.6-12 122.8 46 73.2-20 150.4-20 223.6 0C710.4 237.2 748 249.2 748 249.2c24.4 61.6 9.2 106.8 4.4 118.4 30 32.4 46.8 75.6 46 120 0 171.6-104.4 209.6-204 220.4 16 14 30.4 40.8 30.4 82.4v123.6c0 12 7.2 25.2 30 20.8 234-78 360.8-330.8 283.2-564.8-60.8-182.8-232-306.4-424.8-306z"
        p-id="6470" fill="#718096"></path>
    </svg>
  ),
  'Rss': (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6238" width="70%" height="70%">
      <path
        d="M55.9104 343.7056a51.2 51.2 0 1 0 0 102.4c261.632 0 474.5216 212.8896 474.5216 474.5728a51.2 51.2 0 0 0 102.4 0c0-318.1568-258.816-576.9728-576.9216-576.9728m0-343.7056a51.2 51.2 0 1 0 0 102.4c451.1744 0 818.176 367.0528 818.176 818.2784a51.2 51.2 0 0 0 102.4 0C976.4864 413.0304 563.5584 0 55.9104 0m100.9664 662.7328a156.928 156.928 0 1 0 0.1024 313.856 156.928 156.928 0 0 0-0.1024-313.856"
        p-id="6239" fill="#718096"></path>
    </svg>),
  'Telegram': (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4181" width="80%" height="80%">
      <path
        d="M389.12 886.58l15.77-238.798 433.766-390.758c19.251-17.408-3.891-26.01-29.286-10.65L273.818 584.5 42.394 510.976c-49.767-14.131-50.176-48.538 11.264-73.318L955.392 89.702c41.165-18.636 80.691 10.24 64.922 73.319l-153.6 723.353c-10.65 51.405-41.78 63.898-84.788 40.141L548.045 753.664 435.61 862.618c-12.698 13.107-23.348 23.961-46.49 23.961z m0 0"
        fill="#718096" p-id="4182"></path>
    </svg>
  ),
  'WeChat': (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5363" width="90%" height="90%">
      <path
        d="M692.10173 348.2c-53.7-0.4-106.9 12.7-154.2 38.2-45.7 24.1-84.3 60.2-111.5 104.1-27.3 43.2-41.7 93.1-41.3 144.1 0.2 25.3 4.1 50.6 11.5 74.8h-33.5c-35.6-1.2-71.2-5.6-106.1-13.2l-20.6-3.7-126.1 65.2 34.5-107.9C48.50173 580.2 0.40173 497.7 0.00173 402.3c-0.2-55.3 16.9-109 48.7-154.2 33.5-48.3 79-87 132.2-111.9 57.2-27.6 120.1-41.5 183.6-40.9 56.8-0.2 113.1 11.3 165.3 33.5 49.8 20.8 94.6 52.2 131.2 91.9 33.9 36.2 56.8 81 66.6 129.5-11.2-1-23.3-2-35.5-2zM243.50173 339c12.1 0.8 24.1-2.9 33.5-10.5 9-8.4 13.8-20.2 13.2-32.5 0.6-12.3-4.3-24.1-13.2-32.5-9.1-8.4-21.2-12.7-33.5-11.9-13.4-0.2-26.5 4.1-37.2 11.9-10.1 7.2-16.2 18.9-16.2 31.2-1 13.3 5.2 26.2 16.2 33.9 11 7.1 24 10.8 37.2 10.4zM1024.00173 629.3c-0.4 41.1-12.7 81.4-35.4 115.6-25.1 35.6-56.1 66.8-91.9 91.9l28 91.9L824.30173 875h-5.4c-33.5 9.4-67.7 15.2-102.4 16.9-54.3 0.6-107.9-11.5-156.5-35.4-44.8-22-83.1-54.9-111.5-96-26.7-38.9-40.9-85.1-40.9-132.2-0.2-47.1 14-93.1 40.9-131.8 28.2-41.1 66.8-74.2 111.5-96 48.7-23.9 102.4-36 156.5-35.4 52.2-0.2 103.8 11.9 150.5 35.4 45.3 21.8 84.3 54.9 113.3 96 28.2 38.4 43.4 84.9 43.2 132.8h0.5zM498.80173 250.1c-14-0.6-27.6 3.7-38.9 11.9-11.1 7.2-17.5 19.5-16.9 32.5-0.4 13 6 25.5 16.9 32.5 11.1 8 24.5 12.1 38.2 11.9 12.1 1 24.1-2.7 33.5-10.5 8.2-9 12.5-20.6 11.9-32.5 1.6-12.7-2.9-25.1-11.9-34.1s-21.6-13.2-34.1-11.9h1.4v0.2z m117 334.6c11.9 0.8 23.6-3.3 32.5-11.1 7.4-6.4 11.7-15.6 11.9-25.3-0.4-9.7-4.7-18.9-11.9-25.3-9-7.8-20.6-11.7-32.5-11.1-9.3 0.4-17.9 4.3-24.3 11.1-6.8 6.6-10.9 15.8-11.1 25.3 0.2 9.5 4.1 18.7 11.1 25.3 6.4 6.8 15.1 10.7 24.3 11.1z m199.3 0c11.9 0.8 23.6-3.3 32.5-11.1 7.4-6.4 11.7-15.6 11.9-25.3-0.6-9.9-5.4-19.3-13.2-25.3-8.8-7.4-19.9-11.3-31.2-11.1-9.3 0.2-18.1 4.1-24.3 11.1-6.8 6.6-10.9 15.8-11.1 25.3 0.2 9.5 4.1 18.7 11.1 25.3 6.2 6.8 15 10.9 24.3 11.1z m0 0"
        p-id="5364" fill="#718096"></path>
    </svg>)
};

export default function Header() {
  const router = useRouter();
  const isHomePage = router.pathname === '/' ? true : false;
  return (
    <nav className="mx-4 lg:mx-20 lg:my-12 lg:mb-20  flex justify-between items-center my-8">
      <Link href="/">
        <header>
          <a title="Home Page" className="text-red-700 lg:text-3xl text-2xl tracking-wide font-bold">
            {
              isHomePage ? <h1>BlogHub</h1> : 'BlogHub'
            }
          </a>
        </header>
      </Link>
      <div className="flex items-center">
        {HEADER_NAVS.map(c => (
          <Link href={c.href} key={c.name} prefetch={c.prefetch}>
            <a rel={c.rel}
               title={c.name}
               target={c.target}
               className={`ml-4 lg:ml-12 cursor-pointer ${c.className}`}
            >
              {
                ICON_MAP[c.name] ?
                  (<div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center">
                    {ICON_MAP[c.name]}
                  </div>)
                  :
                  <div className="block text-lg lg:text-2xl text-gray-600 tracking-wide">{c.name}</div>
              }
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}
