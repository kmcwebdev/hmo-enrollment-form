import { NextRequest } from 'next/server';

const middleware = async (req: NextRequest) => {
  const baseDevURL = process.env.ERP_API_DEV;
  const baseProdURL = process.env.ERP_API_PROD;
  const erpApiKey = process.env.ERP_API_KEY;
  const nextUrl = req.nextUrl;
  let baseURL = baseDevURL;
  let employeeId;

  if (process.env.NODE_ENV === 'production') {
    baseURL = baseProdURL;
  }

  nextUrl.searchParams.forEach((val, key) => {
    if (key === 'employeeId') {
      employeeId = val;
      return;
    }
  });

  const response = await fetch(
    `${baseURL}/api/employees/${employeeId}/hmo?apiKey=6${erpApiKey}`
  );

  if (response.status !== 200) {
    return new Response('Failed', { status: 400 });
  }

  return new Response('Success', { status: 200 });
};

export default middleware;
