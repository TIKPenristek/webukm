// import {NextApiRequest, NextApiResponse} from "next";
// import {google} from "googleapis"
// type SheetForm={
//   nama: string
//   email: string
//   pesan:string
// }
// export default async function handler(
//   req:NextApiRequest,
//   res:NextApiResponse
// ){
//   if(req.method !=='POST'){
//     return res.status(statusCode:405).send(body:{message:'Only post as allowed'})
//   }
//   const body=req.body as SheetForm

//   try{
//     //preper auto 
//     const auth=google.auth.GoogleAuth(opts{
//       credentials:{
//         client_email: process.env.GOOGLE_CLIENT_EMAIL,
//         private_key: process.env.GOOGLE_PRIVARW_KEY?replace(/\\n/g, '/n')

//       },
//       scopes:[
//         'https://www.googleapi.com/auth/drive',
//         'https://www.googleapi.com/auth/drive.file',
//         'https://www.googleapi.com/auth/spreadsheets'
//       ]

//     });
//     const sheets=google.sheets({
//       auth,
//       version:'v4'
//     });
//     const response=await sheets.spreadsheets.values.append(params:{
//       spreadsheetId: process.env.GOOGLE_SHEET_ID,
//       range:'A1:D1',
//       valueInputOption:'USER_ENTERED',
//       requesttBody:{
//         values:[
//           [body.nama, body.pesan]
//         ]
//       }

//     });

//     return res.status(statusCode: 200).json(body:{
//       data:response.data
//     })
//     catch(e){
//       console.error(e)
//       return res.status(statusCode: 500).send(body:{message: e.message??'some thing wrong'})
//     }
//   }
// }