import { list } from 'postcss';
import type { PageServerLoad, Actions } from './$types';
import { fail } from "@sveltejs/kit"



export const load = (async ({fetch}) => {
    const promoRes = await fetch('http://backend-test:3333/promo/all');
    const promoData = await promoRes.json();
    
    return {
        promoData
    };
}) satisfies PageServerLoad;




export const actions = {

    default: async  ({ request , fetch}) => {

        let promotionList:any[] = [];
        const formData = await request.formData();
        const cui = formData.get('dpi');
        const nombres = formData.get('nombres');
        const apellidos = formData.get('apellidos');
        const email = formData.get('email');
        const date = formData.get('date');
        const listPromos: any[] = JSON.parse( formData.get('listPromos') as string);
       

        // if(dpi?.toString.length != 0) {
        //         return fail(400, {
        //           error: true,
        //           message: 'Dpi deberian ser numeros.',
        //         })
        //       }
        
        if(  listPromos.length === 0){
            return fail(400, {
                error: true,
                message: 'Debe elegir un listadod de servicios o productos.',
              })
        }
              
        const  dataSend = { cui, nombres, apellidos, email, date}

        const option = {
            method: "post",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(dataSend)
        }
        const valueResp = await fetch('http://backend-test:3333/fairlist/create', option );
        const createtFairlist =  await valueResp.json();
        console.log("vALUE: ",createtFairlist);
        const idCurrent = createtFairlist.fairlist_id;
        if( idCurrent && listPromos){
            if(listPromos){
                console.log(listPromos.length);
                listPromos.forEach(element => {
                    promotionList.push({ 
                        id_fairlist: idCurrent,
                        id_promo: element.id_promo 
                    })
                });

                const dataList = { listPromos : promotionList}
                console.log(JSON.stringify(dataList));
                const optionList = {
                    method: "post",
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify(dataList)
                }
                const valueResp = await fetch('http://backend-test:3333/fairlist-promo/create', optionList );
                const jsonSalida =  await valueResp.json();
                console.log("vALUE: ",jsonSalida);
            }
        }
       return {
        success: true,
        message:  'Su codigo de consulta es:' + idCurrent
      }

    }
} satisfies Actions;

