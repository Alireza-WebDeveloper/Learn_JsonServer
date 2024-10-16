import React from 'react';

interface Props {
  message?: string;
}

const Alert: React.FC<Props> = ({ message = 'مشکلی پیش آمده' }) => {
  return (
    <div
      className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
      role="alert"
    >
      <span className="font-medium">خطا</span> {message}
    </div>
  );
};

export default Alert;
