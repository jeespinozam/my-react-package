# Neptune Payment Element

The Neptune Payment Element is a custom element that allows you to accept payments in your web application. It is a wrapper around the Neptune Payment API.

## Custom payment flow

Learn how to embed the Neptune Payment Element in your web application and customize the payment flow.

### Step 1: Create a Neptune account

If you don't have a Neptune account, [sign up](https://neptunepayments.com/contact) for one.

### Step 2: Create a Merchant

If you don't have a Merchant, [create one](https://dashboard.neptunepayments.com/) in your Neptune account.

### Step 3: Create a Payment Element

If you don't have a Payment Element, [create one](https://dashboard.neptunepayments.com/payments/create) in your Neptune account.

### Step 4: Add Neptune Payment Element to your web application

Add Neptune Payment Element to your web application by including the Neptune Payment Element script in your HTML.

```js
<script src="https://neptunepayments.com/payment-element.js"></script>
```

or by using a package manager:

```bash
npm install neptune-payment-element
```

```bash
yarn add neptune-payment-element
```

### Step 5: Initialize Neptune Payment Element

Initialize Neptune Payment Element by creating a new instance of the NeptunePaymentElement class and passing it the Payment Element ID and the Merchant ID.

```js
const neptunePromise = new loadNeptune({
  paymentElementId: 'payment-element-id',
  merchantId: 'merchant-id',
});
```

### Step 6: Add Neptune Payment Element to your react application

Add Neptune Payment Element to your react application by importing the Neptune Payment Element component.

```js
import NeptunePaymentElement from 'neptune-payment-element';
```

### Step 7: Start using Neptune Payment Element

Start using Neptune Payment Element by adding the NeptunePaymentElement component to your react application, but declare a context variable to hold the neptunePromise.

```js
<NeptuneProvider neptune={neptunePromise}>
    <NeptunePaymentElement />
</NeptuneProvider>
```

### Step 8: Customize Neptune Payment Element

Customize Neptune Payment Element by passing the following props to the NeptunePaymentElement component.

| Prop | Type | Description |
| --- | --- | --- |
| `merchantId` | `string` | The ID of the Merchant. |
| `paymentElementId` | `string` | The ID of the Payment Element. |
| `currency` | `string` | The currency of the payment. |
| `description` | `string` | The description of the payment. |
| `onPaymentSuccess` | `function` | The callback function that is called when the payment is successful. |
| `onPaymentError` | `function` | The callback function that is called when the payment is unsuccessful. |
| `onPaymentCancel` | `function` | The callback function that is called when the payment is cancelled. |
| `onPaymentComplete` | `function` | The callback function that is called when the payment is completed. |
| `style` | `object` | The style of the Neptune Payment Element. |
