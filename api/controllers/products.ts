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

const addProduct = ({ response }: { response: any }) => {
    response.body = "add a product"
}




// @desc    Update a product
// @route   PUT /api/v1/products/:id

const updateProduct = ({ response }: { response: any }) => {
    response.body = "update"
}




// @desc    Delete a product
// @route   DELETE /api/v1/products/:id

const deleteProduct = ({ response }: { response: any }) => {
    response.body = "delete"
}




export { getProducts, getProduct, addProduct, updateProduct, deleteProduct }