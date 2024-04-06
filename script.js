import http from 'k6/http';
import { check, sleep } from 'k6';

 export const options = {
    vus: 50,
    duration: '5m'
    };

  

export default function () {
  const res = http.get('/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}