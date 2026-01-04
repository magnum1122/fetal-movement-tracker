import { View, Text } from 'react-native'
import { Badge } from '@/assets/Logo/badge'
import React from 'react'

const BadgeView = () => {
  return (
    <View className='bg-gray-200/30 items-center justify-center gap-2 flex-row rounded-2xl w-16 h-8'>
        <Badge />
        <Text className='font-semibold text-lg'>0</Text>
    </View>
  )
}

export default BadgeView