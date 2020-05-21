import { v4 } from "https://deno.land/std/uuid/mod.ts"
import { Product } from "../types.ts"

let products: Product[] = [
    {
        id: "1",
        name: "Product One",
        description: "This is product one",
        price: 9.99,
    },
    {
        id: "2",
        name: "Product Two",
        description: "This is product two",
        price: 39.99,
    },
    {
        id: "3",
        name: "Product Three",
        description: "This is product three",
        price: 69.99,
    },
]


// @desc    Get all products
// @route   GET /api/v1/products

const getProducts = ({ response }: { response: any }) => {
    response.body = {
        success: true,
        data: products
    }
}




// @desc    Get a single product
// @route   GET /api/v1/products/:id

const getProduct = ({ params, response }: { params: { id: string }, response: any }) => {
    const product: Product | undefined = products.find(p => p.id === params.id)

    if (product) {
        response.status = 200
        response.body = {
            success: true,
            data: product
        }
    } else {
        response.status = 404
        response.body = {
            success: false,
            msg: "No product with specified ID found"
        }
    }
}


// @desc    Add a product
// @route   POST /api/v1/products

const addProduct = async ({ request, response }: { request: any, response: any }) => {
    const body = await request.body()

    if (!request.hasBody) {
        response.status = 400
        response.body = {
            success: false,
            msg: "No data"
        }
    } else {
        const product: Product = body.value
        product.id = v4.generate()
        products.push(product)
        response.status = 201
        response.body = {
            success: true,
            data: product
        }
    }
}




// @desc    Update a product
// @route   PUT /api/v1/products/:id

const updateProduct = ({ params, request, response }: { params: { id: string }, request: any, response: any }) => {
    
}




// @desc    Delete a product
// @route   DELETE /api/v1/products/:id

const deleteProduct = ({ response }: { response: any }) => {
    response.body = "delete"
}




export { getProducts, getProduct, addProduct, updateProduct, deleteProduct }