import type { PageServerLoad , Actions} from './$types';
import { fail } from "@sveltejs/kit"

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {

    default: async  ({ request , fetch}) => { 

        const formData = await request.formData();
        const id = formData.get('id');

        console.log(id);
        const valueResp = await fetch('http://backend-test:3333/fairlist/id?id='+ id);
        const myListFairOffers =  await valueResp.json();
        console.log(myListFairOffers);
        if(myListFairOffers.status){
            return fail(400, {
                error: true,
                message: 'No se encontro su Lista de Promociones.',
              })
        }
        const tempArray: any[] = myListFairOffers.fairlist_promo_item;
        const cui = myListFairOffers.cui;
        const nombres = myListFairOffers.nombres;
        const apellidos = myListFairOffers.apellidos;
        const email = myListFairOffers.email;

        const mainData = { cui , nombres, apellidos, email}
        // tempArray.forEach( (element) => {
        //     console.log(element);
        // })

        return {
            success: true,
            dataFound:  tempArray,
            userData: mainData,
            message: 'Su Lista de promociones fue encontrada'
          }

    }

} satisfies Actions;