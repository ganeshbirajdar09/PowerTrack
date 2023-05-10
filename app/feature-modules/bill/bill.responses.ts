export const BILL_RESPONSES = {
    PAYMENT_SUCCESS:{
        statusCode: 200,
        message: "bill paid successfully"
    },
    PAYMENT_FAILURE:{
        statusCode: 400,
        message: "couldn't pay the bill"
    },
    IMAGE_PROBLEM:{
        statusCode: 400,
        message: "couldn't upload image"
    },
    MISSING_FIELDS:{
        statusCode: 400,
        message: "please include all fields"
    },
    GENERATE_SUCCESS:{
        statusCode: 201,
        message: "bill has been generated successfully"
    },
    SOMETHING_WENT_WRONG:{
        statusCode: 500,
        message: "something went wrong"
    }
}