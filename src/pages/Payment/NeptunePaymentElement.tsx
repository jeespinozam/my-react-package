import { Loader } from '@src/components/atoms'
import React, { FC, useEffect, useState } from 'react'
import { fluidPayTokenizer } from '@src/utils'
import styles from './Payments.module.scss'
import Tokenizer from 'fluidpay-tokenizer'

let tokenizerInstance: Tokenizer
interface NeptunePaymentElementProps {
  merchantPubKey: string
  setTokenizer: (tokenizer: Tokenizer) => void
  onError?: (msg: any) => void
  onSuccess?: (tokenizerInstance: Tokenizer, token: string) => void
  isFluidPayDevMode?: boolean
}

const NeptunePaymentElement: FC<NeptunePaymentElementProps> = ({
  merchantPubKey,
  onError,
  onSuccess,
  isFluidPayDevMode = false,
  setTokenizer
}) => {
  const [formEl, setFormEl] = useState<HTMLDivElement | null>(null)
  const [iframeIsLoading, setIframeIsLoading] = useState(true)

  useEffect(() => {
    if (formEl && merchantPubKey) {
      tokenizerInstance = fluidPayTokenizer({
        isFluidPayDevMode,
        apikey: merchantPubKey,
        container: formEl,
        onLoad: () => {
          setIframeIsLoading(false)
        },
        submission: (response: any) => {
          const { status, msg, token } = response
          console.info({ msg, token })

          switch (status) {
            case 'success':
              onSuccess?.(tokenizerInstance, token)
              break
            case 'error':
              onError?.(msg)
              break
          }
        }
      })
      setTokenizer(tokenizerInstance)
    }
  }, [formEl, merchantPubKey])

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formContent}>
        <div id="payment-form" ref={(el: HTMLDivElement) => setFormEl(el)} />
      </div>
      {iframeIsLoading && (
        <div className={styles.loader}>
          <Loader isLoading />
        </div>
      )}
    </div>
  )
}

export default NeptunePaymentElement
