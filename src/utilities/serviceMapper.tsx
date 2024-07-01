import servicesMap, { serviceDetails } from './services.map';
import { interpolate } from '@docusaurus/Interpolate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function map(key: string): serviceDetails {
  const { siteConfig, i18n } = useDocusaurusContext();

  if (servicesMap.hasOwnProperty(key) === false) {
    return null;
  }

  const info = servicesMap[key];

  info.url = interpolate(info.url, {
    marketingSite: siteConfig.customFields.marketingSite,
    language: i18n.currentLocale,
  });

  return info;
}

export function mapList(keys: Array<string>): serviceDetails[] {
  let serviceInfoList = new Array<serviceDetails>;

  keys.forEach(key => serviceInfoList.push(map(key)));

  return serviceInfoList.filter((serviceInfo) => serviceInfo !== null);
}
