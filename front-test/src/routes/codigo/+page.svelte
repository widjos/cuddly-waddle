<script lang="ts">
    import type { PageData } from "./$types";
    import { enhance, applyAction } from "$app/forms";
    import Alert from "../../lib/components/Alert.svelte";

   
    export let form;

    let resultTemp: any[] = [];
  
    $: idBusqueda = 0;
</script>

<div class="flex-col">
    <div class="flex justify-center">
        <div
            class="card bg-base-300 rounded-box grid h-auto w-5 flex-grow place-items-center"
        >
            <div class="card bg-base-300 w-96 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Informacion Personal</h2>
                    <div class="card">
                        <form
                            method="POST"
                            id="form-fairlist"
                            class="w-full max-w-sm card"
                            use:enhance
                        >
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                    <label
                                        class="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                        for="inline-full-name"
                                    >
                                        Id de su lista de Ofertas
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input
                                        type="number"
                                        name="id"
                                        placeholder="Introduzca el codigo"
                                        class="input input-bordered w-full max-w-xs"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="md:flex md:items-center">
                                <div class="md:w-1/3"></div>
                                <div class="md:w-2/3">
                                    <button
                                        class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                    >
                                        Buscar mi lista
                                    </button>
                                    <div class="container max-auto top-5 mb-10">
                                        {#if form?.error}
                                            <Alert
                                                message={form?.message}
                                                isError={true}
                                            />
                                        {:else if form?.success}
                                            <Alert
                                                message={form?.message}
                                                isError={false}
                                            />
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br />
    {#if form?.success}
    <div class="flex justify-stretch">
        <label
        class="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="inline-full-name"
    >
        dpi : {form?.userData.cui}
    </label>
        <label
            class="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
        >
            Nombre : {form?.userData.nombres}
        </label>
        <label
            class="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
        >
            Apellido: {form?.userData.apellidos}
        </label>
        <label
        class="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="inline-full-name"
    >
        Email: {form?.userData.email}
    </label>
    </div>
    <div class="flex justify-center p-10">
        
            <div
                class="card bg-base-300 rounded-box grid h-auto flex-grow place-items-center p-*"
            >
                <h2 class="card-title">Productos/Servicios</h2>

                <div class=" max-h-96 overflow-scroll w-full">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each form?.dataFound as promo}
                                <tr>
                                    <td>
                                        {promo.promo_id.nombre}
                                    </td>
                                    <td> Q.{promo.promo_id.precio} </td>
                                </tr>
                            {/each}

                            <!-- foot -->
                        </tbody><tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Precio</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        
    </div>
    {/if}
</div>
