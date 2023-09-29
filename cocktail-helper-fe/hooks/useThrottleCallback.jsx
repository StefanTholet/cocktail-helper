const useThrottleCallback = (func, delay) => {
  return () => setTimeout(func, delay)
}

export default useThrottleCallback
