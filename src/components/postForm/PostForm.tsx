import { FC } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import './postForm.scss';

type Inputs = {
  firstName: string;
  postText: string;
};

export const PostForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <>
      <form className="post-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="post-form__input-block">
          <label htmlFor="firstName">
            Аталышы<span>*</span>
          </label>
          <p className="post-form__descr">Посттуңуздун, окуяңыздын, сөзүңүздүн темасы</p>
          <input
            className="post-form__input-name"
            id="firstName"
            type="text"
            placeholder="Аталышы"
            {...register('firstName', {
              required: true,
              maxLength: {
                value: 3,
                message: 'Минимум 3 символов',
              },
            })}
          />
          <div>{errors.firstName && <p>{errors?.firstName.message || 'Error!'}</p>}</div>
        </div>
        <div className="post-form__input-block">
          <label htmlFor="heading">
            Рубриканы тандоо<span>*</span>
          </label>
          <div className="heading-buttons">
            <input type="button" value="#сөздүнкүчү" />
            <input type="button" value="#болгонокуя" />
            <input type="button" value="#мизогония" />
            <input type="button" value="#фразеологизм" />
          </div>
        </div>
        <div className="post-form__input-block">
          <label htmlFor="foto">Сүрөт жүктөө</label>
          <p className="post-form__descr">Постуңузга сүрөт жүктөө үчүн</p>
          <input
            className="post-form__input-foto"
            id="foto"
            name="foto"
            type="file"
            placeholder="сүрөт"
          />
        </div>
        <div className="post-form__input-block">
          <label htmlFor="postText">
            Посттун текстти<span>*</span>
          </label>
          <p className="post-form__descr">Окуяңыздын, сөзүңүздүн түшүндүрмөсүн жазыңыз.</p>
          <textarea
            className="post-form__textarea"
            id="postText"
            placeholder="Текст..."
            {...register('postText', {
              required: true,
              maxLength: {
                value: 30,
                message: 'Минимум 30 символов',
              },
            })}
          />
          <div>{errors.postText && <p>{errors?.postText.message || 'Error!'}</p>}</div>
        </div>
        <button className="post-form__sumbit-btn" type="submit">
          Жүктөө
        </button>
      </form>
    </>
  );
};
