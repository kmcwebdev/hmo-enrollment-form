import { NextRequest } from 'next/server';

const middleware = async (req: NextRequest) => {
  const baseHRProdURL = process.env.ERP_HR_API_PROD;
  const erpApiKey = process.env.ERP_API_KEY;
  const nextUrl = req.nextUrl;
  let employeeId;

  nextUrl.searchParams.forEach((val, key) => {
    if (key === 'employeeId') {
      employeeId = val;
      return;
    }
  });

  const response = await fetch(
    `${baseHRProdURL}/api/employees/${employeeId}/hmo?apiKey=${erpApiKey}`
  );

  if (response.status !== 200) {
    return new Response('Failed', { status: 400 });
  }

  return new Response('Success', { status: 200 });
};

export default middleware;
