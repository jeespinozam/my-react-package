# Neptune Payment Element

The Neptune Payment Element is a custom element that allows you to accept payments in your web application. It is a wrapper around the Neptune Payment API.

## Custom payment flow

Learn how to embed the Neptune Payment Element in your web application and customize the payment flow.

### Step 1: Create a Neptune account

If you don't have a Neptune account, [sign up](https://neptunepayments.com/contact) for one.

### Step 2: Create a Merchant

If you don't have a Merchant, [create one](https://dashboard.neptunepayments.com/) in your Neptune account.

### Step 3: Add Neptune Payment Element to your web application

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

### Step 4: Add Neptune Payment Element to your react application

Add Neptune Payment Element to your react application by importing the Neptune Payment Element component.

```js
import NeptunePaymentElement from 'neptune-payment-element';
```

### Step 7: Start using Neptune Payment Element

Start using Neptune Payment Element by adding the NeptunePaymentElement component to your react application.

```js
const merchantPubKey = <<merchantPubKey>>
const [tokenizer, setTokenizer] = useState<Tokenizer>();

<NeptunePaymentElement merchantPubKey={merchantPubKey} setTokenizer={setTokenizer}/>
```

### Step 8: Customize Neptune Payment Element

Customize Neptune Payment Element by passing the following props to the NeptunePaymentElement component.

| Prop | Type | Description |
| --- | --- | --- |
| `merchantPubKey` | `string` | The public api key of the Merchant. |
| `setTokenizer` | `function` | The setter for the tokenizer state. |
| `isFluidPayDevMode` | `boolean` | Defines whether to use sandbox or not. |
| `onSuccess` | `function` | The callback function that is called when the payment is successful. |
| `onError` | `function` | The callback function that is called when the payment is unsuccessful. |
