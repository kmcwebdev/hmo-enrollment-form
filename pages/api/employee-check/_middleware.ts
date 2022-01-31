import { NextRequest } from 'next/server';

const middleware = async (req: NextRequest) => {
  const url = req.nextUrl;
  let employeeId;

  url.searchParams.forEach((val, key) => {
    if (key === 'employeeId') {
      employeeId = val;
      return;
    }
  });

  const response = await fetch(
    `https://acmkmc.azurewebsites.net/api/employees/${employeeId}/hmo?apiKey=620f5854-de2a-4993-a1d7-b5a5a8f09457`
  );

  if (response.status !== 200) {
    return new Response('Failed', { status: 400 });
  }

  return new Response('Success', { status: 200 });
};

export default middleware;
