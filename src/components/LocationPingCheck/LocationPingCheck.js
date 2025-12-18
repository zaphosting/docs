import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

// Inline-SVG Icon (FA-ähnliche Baseline)
const Icon = ({ d, viewBox, className, title }) => (
  <svg
  width="1em"
  height="1em"
  viewBox={viewBox}
  aria-hidden="true"
  preserveAspectRatio="xMidYMid meet"
  style={{ verticalAlign: '-0.125em' }}
  className={className}
  >
  {title ? <title>{title}</title> : null}
  <path d={d} fill="currentColor" fillRule="nonzero" />
  </svg>
);

// Produkt-Icons (solid)
const ICONS = {
  // Gameserver (Joystick) – 24er Koordinaten
  joystick: {
    d: "M448 128C554 128 640 214 640 320C640 426 554 512 448 512L192 512C86 512 0 426 0 320C0 214 86 128 192 128L448 128zM192 240C178.7 240 168 250.7 168 264L168 296L136 296C122.7 296 112 306.7 112 320C112 333.3 122.7 344 136 344L168 344L168 376C168 389.3 178.7 400 192 400C205.3 400 216 389.3 216 376L216 344L248 344C261.3 344 272 333.3 272 320C272 306.7 261.3 296 248 296L216 296L216 264C216 250.7 205.3 240 192 240zM432 336C414.3 336 400 350.3 400 368C400 385.7 414.3 400 432 400C449.7 400 464 385.7 464 368C464 350.3 449.7 336 432 336zM496 240C478.3 240 464 254.3 464 272C464 289.7 478.3 304 496 304C513.7 304 528 289.7 528 272C528 254.3 513.7 240 496 240z",
    viewBox: "0 0 640 640",
  },
  // VPS (Cubes) – 24er Koordinaten
  cubes: {
    d: "M288.3 61.5C308.1 50.1 332.5 50.1 352.3 61.5L528.2 163C548 174.4 560.2 195.6 560.2 218.4L560.2 421.4C560.2 444.3 548 465.4 528.2 476.8L352.3 578.5C332.5 589.9 308.1 589.9 288.3 578.5L112.5 477C92.7 465.6 80.5 444.4 80.5 421.6L80.5 218.6C80.5 195.7 92.7 174.6 112.5 163.2L288.3 61.5zM496.1 421.5L496.1 255.4L352.3 338.4L352.3 504.5L496.1 421.5z",
    viewBox: "0 0 640 640",
  },
  // Dedicated (Server) – 24er Koordinaten
  server: {
    d: "M160 96C124.7 96 96 124.7 96 160L96 224C96 259.3 124.7 288 160 288L480 288C515.3 288 544 259.3 544 224L544 160C544 124.7 515.3 96 480 96L160 96zM376 168C389.3 168 400 178.7 400 192C400 205.3 389.3 216 376 216C362.7 216 352 205.3 352 192C352 178.7 362.7 168 376 168zM432 192C432 178.7 442.7 168 456 168C469.3 168 480 178.7 480 192C480 205.3 469.3 216 456 216C442.7 216 432 205.3 432 192zM160 352C124.7 352 96 380.7 96 416L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 416C544 380.7 515.3 352 480 352L160 352zM376 424C389.3 424 400 434.7 400 448C400 461.3 389.3 472 376 472C362.7 472 352 461.3 352 448C352 434.7 362.7 424 376 424zM432 448C432 434.7 442.7 424 456 424C469.3 424 480 434.7 480 448C480 461.3 469.3 472 456 472C442.7 472 432 461.3 432 448z",
    viewBox: "0 0 640 640",
  },
  // Domain (Globe) – 24er Koordinaten
  globe: {
    d: "M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z",
    viewBox: "0 0 640 640",
  },
  // Webspace (Cloud) – 24er Koordinaten
  cloud: {
    d: "M32 400C32 479.5 96.5 544 176 544L480 544C550.7 544 608 486.7 608 416C608 364.4 577.5 319.9 533.5 299.7C540.2 286.6 544 271.7 544 256C544 203 501 160 448 160C430.3 160 413.8 164.8 399.6 173.1C375.5 127.3 327.4 96 272 96C192.5 96 128 160.5 128 240C128 248 128.7 255.9 129.9 263.5C73 282.7 32 336.6 32 400z",
    viewBox: "0 0 640 640",
  },
  // Voicebot (Robot) – 24er Koordinaten
  robot: {
    d: "M352 64C352 46.3 337.7 32 320 32C302.3 32 288 46.3 288 64L288 128L192 128C139 128 96 171 96 224L96 448C96 501 139 544 192 544L448 544C501 544 544 501 544 448L544 224C544 171 501 128 448 128L352 128L352 64zM160 432C160 418.7 170.7 408 184 408L216 408C229.3 408 240 418.7 240 432C240 445.3 229.3 456 216 456L184 456C170.7 456 160 445.3 160 432zM280 432C280 418.7 290.7 408 304 408L336 408C349.3 408 360 418.7 360 432C360 445.3 349.3 456 336 456L304 456C290.7 456 280 445.3 280 432zM400 432C400 418.7 410.7 408 424 408L456 408C469.3 408 480 418.7 480 432C480 445.3 469.3 456 456 456L424 456C410.7 456 400 445.3 400 432zM224 240C250.5 240 272 261.5 272 288C272 314.5 250.5 336 224 336C197.5 336 176 314.5 176 288C176 261.5 197.5 240 224 240zM368 288C368 261.5 389.5 240 416 240C442.5 240 464 261.5 464 288C464 314.5 442.5 336 416 336C389.5 336 368 314.5 368 288zM64 288C64 270.3 49.7 256 32 256C14.3 256 0 270.3 0 288L0 384C0 401.7 14.3 416 32 416C49.7 416 64 401.7 64 384L64 288zM608 256C590.3 256 576 270.3 576 288L576 384C576 401.7 590.3 416 608 416C625.7 416 640 401.7 640 384L640 288C640 270.3 625.7 256 608 256z",
    viewBox: "0 0 640 640",
  },
  // Voiceserver (Microphone) – großer FA-Pfad, eigenes viewBox
  mic: {
    d: "M224 160C224 107 267 64 320 64C370.3 64 411.6 102.7 415.7 152L360 152C346.7 152 336 162.7 336 176C336 189.3 346.7 200 360 200L416 200L416 248L360 248C346.7 248 336 258.7 336 272C336 285.3 346.7 296 360 296L415.7 296C411.6 345.3 370.4 384 320 384C267 384 224 341 224 288L224 160zM152 224C165.3 224 176 234.7 176 248L176 288C176 367.5 240.5 432 320 432C399.5 432 464 367.5 464 288L464 248C464 234.7 474.7 224 488 224C501.3 224 512 234.7 512 248L512 288C512 385.9 438.7 466.7 344 478.5L344 528L392 528C405.3 528 416 538.7 416 552C416 565.3 405.3 576 392 576L248 576C234.7 576 224 565.3 224 552C224 538.7 234.7 528 248 528L296 528L296 478.5C201.3 466.7 128 385.9 128 288L128 248C128 234.7 138.7 224 152 224z",
    viewBox: "0 0 640 640",
  },
};

// Locations mit products-Flags (Beispielbelegung anpassen)
const locations = [
  {
    id: 'de-fra',
    label: 'FFM / Eygelshoven, DE',
    domain: 'ping-frankfurt.zap-hosting.com',
    flagUrl: 'https://zap-cdn.com/interface/_images/flags/clean/de.jpg',
    continent: 'Europe',
    products: { gameserver: true, vps: true, dedicated: true, domain: true, webspace: true, voicebot: true, voiceserver: true }
  },
  {
    id: 'uk-lon',
    label: 'London, UK',
    domain: 'ping-london.zap-hosting.com',
    flagUrl: 'https://zap-cdn.com/interface/_images/flags/clean/uk.png',
    continent: 'Europe',
    products: { gameserver: true, vps: false, dedicated: false, domain: true, webspace: false, voicebot: true, voiceserver: false }
  },
  {
    id: 'us-la',
    label: 'Los Angeles, US',
    domain: 'ping-losangeles.zap-hosting.com',
    flagUrl: 'https://zap-cdn.com/interface/_images/flags/clean/us.jpg',
    continent: 'North America',
    products: { gameserver: true, vps: true, dedicated: false, domain: true, webspace: false, voicebot: true, voiceserver: true }
  },
  {
    id: 'us-ash',
    label: 'Ashburn, US',
    domain: 'ping-ashburn.zap-hosting.com',
    flagUrl: 'https://zap-cdn.com/interface/_images/flags/clean/us.jpg',
    continent: 'North America',
    products: { gameserver: true, vps: true, dedicated: false, domain: true, webspace: false, voicebot: true, voiceserver: true }
  },
  {
    id: 'us-dal',
    label: 'Dallas, US',
    domain: 'ping-dallas.zap-hosting.com',
    flagUrl: 'https://zap-cdn.com/interface/_images/flags/clean/us.jpg',
    continent: 'North America',
    products: { gameserver: true, vps: true, dedicated: false, domain: true, webspace: false, voicebot: true, voiceserver: true }
  },
  {
    id: 'ca-mtl',
    label: 'Montreal, CA',
    domain: 'ping-montreal.zap-hosting.com',
    flagUrl: 'https://zap-cdn.com/interface/_images/flags/clean/ca.jpg',
    continent: 'North America',
    products: { gameserver: true, vps: true, dedicated: false, domain: true, webspace: false, voicebot: true, voiceserver: true }
  },
  {
    id: 'au-syd',
    label: 'Sydney, AU',
    domain: 'ping-sydney.zap-hosting.com',
    flagUrl: 'https://zap-cdn.com/interface/_images/flags/clean/australia.png',
    continent: 'Australia',
    products: { gameserver: true, vps: false, dedicated: false, domain: true, webspace: false, voicebot: true, voiceserver: true }
  },
  {
    id: 'sg-sin',
    label: 'Singapore, SI',
    domain: 'ping-singapore.zap-hosting.com',
    flagUrl: 'https://zap-cdn.com/interface/_images/flags/clean/sp.png',
    continent: 'Asia',
    products: { gameserver: true, vps: false, dedicated: false, domain: true, webspace: false, voicebot: true, voiceserver: true }
  },
];

const continents = Array.from(new Set(locations.map(l => l.continent)));
const TIMEOUT_MS = 2000;

const productOrder = [
  { key: 'gameserver', icon: ICONS.joystick, title: 'Gameserver' },
  { key: 'vps', icon: ICONS.cubes, title: 'VPS' },
  { key: 'dedicated', icon: ICONS.server, title: 'Dedicated Server' },
  { key: 'domain', icon: ICONS.globe, title: 'Domain' },
  { key: 'webspace', icon: ICONS.cloud, title: 'Webspace' },
  { key: 'voiceserver', icon: ICONS.mic, title: 'Voiceserver' },
  { key: 'voicebot', icon: ICONS.robot, title: 'Voicebot' },
];

function timeoutPromise(ms) {
  return new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms));
}

async function pingOnce(url) {
  const controller = new AbortController();
  const start = performance.now();
  try {
    await Promise.race([
      fetch(url, { method: 'HEAD', mode: 'no-cors', cache: 'no-store', signal: controller.signal }),
      timeoutPromise(TIMEOUT_MS),
    ]);
    return performance.now() - start;
  } catch {
    controller.abort();
    throw new Error('unreachable');
  }
}

async function measureHost(domain) {
  const url = `https://${domain}/favicon.ico`;
  try {
    await fetch(url, { method: 'HEAD', mode: 'no-cors' });
    const t = await pingOnce(url);
    return { reachable: true, timeMs: t };
  } catch {
    return { reachable: false };
  }
}

export default function LocationPingCheck() {
  const [results, setResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    locations.forEach(loc => {
      fetch(`https://${loc.domain}/favicon.ico`, { method: 'HEAD', mode: 'no-cors' }).catch(() => {});
    });
  }, []);

  async function handleClick() {
    setIsLoading(true);
    setResults({});
    locations.forEach(async (loc) => {
      const result = await measureHost(loc.domain);
      setResults(prev => ({ ...prev, [loc.id]: result }));
    });
    setIsLoading(false);
  }

  return (
    <div className={styles.wrapper}>
      {continents.map((continent) => (
        <div key={continent} className={styles.continentBlock}>
          <div className={styles.divider}>{continent}</div>
          <div className={styles.locationRow}>
            {locations.filter(l => l.continent === continent).map((loc) => {
              const r = results[loc.id];
              const ok = r?.reachable;
              const txt = ok && r.timeMs ? `- ${Math.round(r.timeMs)} ms -` : '-';

              return (
                <div key={loc.id} className={styles.locationBox}>
                  <div className={styles.innerBox}>
                    <div className={styles.locationRowContent}>
                      <div className={styles.flagWrapper}>
                        <img src={loc.flagUrl} alt="Flag" width={30} height={18} className={styles.flag} />
                      </div>
                      <div className={styles.labelWrapper}>
                        <div className={styles.labelText}>{loc.label}</div>
                        <small
                          className={
                            ok
                              ? (r.timeMs > 100 ? styles.pingHigh : styles.pingNormal)
                              : r ? styles.pingFailed : styles.pingUnreachable
                          }
                        >
                          {ok ? txt : r ? '⚠️ Ping check failed' : 'Waiting for ping check'}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productIcons}>
                    {productOrder.map(p => (
                      <Icon
                        key={p.key}
                        d={p.icon.d}
                        viewBox={p.icon.viewBox}
                        className={loc.products?.[p.key] ? styles.active : styles.inactive}
                        title={p.title}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className={styles.productLegend}>
        <div className={styles.legendColors}>
          <div className={styles.legendColorItem}>
            <span className={styles.legendColorBoxAvailable}></span>
            <span>Available</span>
          </div>
          <div className={styles.legendColorItem}>
            <span className={styles.legendColorBoxUnavailable}></span>
            <span>Not available</span>
          </div>
        </div>
        <div className={styles.legendProducts}>
          {productOrder.map((product) => (
            <div key={product.key} className={styles.legendProductItem}>
              <Icon
                d={product.icon.d}
                viewBox={product.icon.viewBox}
                className={styles.legendProductIcon}
                title={product.title}
              />
              <span className={styles.legendProductLabel}>{product.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <button type="button" onClick={handleClick} disabled={isLoading} className={styles.button}>
          Ping check 🚀
        </button>
      </div>
    </div>
  );
}
