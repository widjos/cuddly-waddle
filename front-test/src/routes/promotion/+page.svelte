<script lang="ts">
    import Alert from "../../lib/components/Alert.svelte";
    import { enhance, applyAction } from "$app/forms";
    export let data;
    export let form;


    let selectedPromo = {};
    let descuentoServicio = 0;
    let descuentoProducto = 0;

    let totalAmountService = 0;

    let promosSelected: any = [];

    $: contadorServicios = 0;
    $: contadorProductos = 0;

    const loadPromoList = () => {
        descuentoServicio = 0;
        descuentoProducto = 0;
        contadorServicios = 0;
        contadorProductos = 0;
        totalAmountService = 0;

        if (promosSelected) {
            promosSelected.forEach((element: any) => {
                if (element.id_solution_type == 1) {
                    contadorProductos++;
                } else if (element.id_solution_type == 2) {
                    contadorServicios++;
                    totalAmountService += +element.precio;
                }
            });

            if (contadorServicios >= 2) {
                if (totalAmountService >= 1500) descuentoServicio = 5;
                else descuentoServicio = 3;
            }
            if (contadorProductos > 1 && contadorProductos < 5) {
                descuentoProducto = 2;
            } else if (contadorProductos >= 5) {
                descuentoProducto = 5;
            }
        }
    };
</script>

<div class="content-center mx-11">
    <h1 class="card-tittle mx-3.5 max-h-6 content-center">
        Porfavor complete el formulario
    </h1>
</div>
<div class="content-center">
    <div class="flex content-center mx-8">
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
                                        DPI
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input
                                        type="text"
                                        name="dpi"
                                        placeholder="Introduzca su DPI"
                                        class="input input-bordered w-full max-w-xs"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                    <label
                                        class="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                        for="inline-full-name"
                                    >
                                        Nombre
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input
                                        type="text"
                                        name="nombres"
                                        placeholder="Introduzca su nombre"
                                        class="input input-bordered w-full max-w-xs"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                    <label
                                        class="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                        for="inline-full-name"
                                    >
                                        Apellido
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input
                                        type="text"
                                        name="apellidos"
                                        placeholder="Introduzca sus apellidos"
                                        class="input input-bordered w-full max-w-xs"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                    <label
                                        class="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                        for="inline-full-name"
                                    >
                                        E-mail
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Introduzca su email"
                                        class="input input-bordered w-full max-w-xs"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                    <label
                                        class="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                        for="inline-full-name"
                                    >
                                        Fecha
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input
                                        type="date"
                                        name="date"
                                        placeholder="Type here"
                                        class="input input-bordered w-full max-w-xs"
                                        required
                                    />
                                </div>
                            </div>
                            <input
                                type="hidden"
                                name="listPromos"
                                value={JSON.stringify(promosSelected)}
                            />
                            <div class="md:flex md:items-center">
                                <div class="md:w-1/3"></div>
                                <div class="md:w-2/3">
                                    <button
                                        class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                    >
                                        Registrar mi lista de Promociones
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
        <div class="divider divider-horizontal"></div>
        <div
            class="card bg-base-300 rounded-box grid h-auto flex-grow place-items-center p-*"
        >
            <h2 class="card-title">Productos/Servicios</h2>

            <div class=" max-h-96 overflow-scroll w-full">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th> </th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each data.promoData as promo}
                            <tr>
                                <th>
                                    <label>
                                        <input
                                            id="${promo.promo_id}"
                                            type="checkbox"
                                            value={promo}
                                            bind:group={promosSelected}
                                            on:change={loadPromoList}
                                            class="checkbox"
                                        />
                                    </label>
                                </th>
                                <td>
                                    {promo.nombre}
                                </td>
                                <td> Q.{promo.precio} </td>
                            </tr>
                        {/each}

                        <!-- foot -->
                    </tbody><tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
    <!-- <div>
        {#each promosSelected as promo}
            <h2>{promo.nombre}</h2>
            <h2>{promo.precio}</h2>
        {/each}
    </div> -->

    <div class="toast toast-end">
        <div class="alert alert-info">
            <span>Descuento en Productos: {descuentoProducto}%</span>
        </div>
        <div class="alert alert-success">
            <span
                >Descuento en Servicios: {descuentoServicio}% - {totalAmountService}</span
            >
        </div>
    </div>
</div>
