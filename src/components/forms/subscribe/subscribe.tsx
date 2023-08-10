import { i18n } from 'translate/i18n'
import * as Form from '@radix-ui/react-form'
import styles from './subscribe.module.css'

export const Subscribe = () => {
  return (
    <div className={styles.box}>
      <p>{i18n.t('messages.subscribe')}</p>
      <Form.Root className={styles.formRoot}>
        <Form.Field name="email" className={styles.formField}>
          <div>
            <Form.Label>Email</Form.Label>
            <Form.Message match="valueMissing">
              {i18n.t('messages.emailNull')}
            </Form.Message>
            <Form.Message match="typeMismatch">
              {i18n.t('messages.emailError')}
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input type="email" placeholder={i18n.t('input.email')} required />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="Button" style={{ marginTop: 10 }}>
            {i18n.t('button.subscribe')}
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  )
}
