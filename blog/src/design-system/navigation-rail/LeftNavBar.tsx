import { Component } from "solid-js"
import { useNavigate } from "solid-start"
import { Icon, StandardIconButton } from "~/design-system"
import { Label } from "~/design-system/typography/Label"

export type LeftNavBarProps = {
}

export const LeftNavBar: Component<LeftNavBarProps> = (_) => {
  const navigate = useNavigate()
  return (
    <div class="flex justify-center bg-surface py-f4">
      <div>
        <StandardIconButton
          color='primary'
          onClick={() => navigate('/dashboard')}
          icon={
            <Icon><span class="material-symbols-outlined">dashboard</span></Icon>
          }
        >
        </StandardIconButton>
        <Label size='small'>Dashboard</Label>
        <StandardIconButton
          color='primary'
          onClick={() => navigate('/use-cases')}
          icon={
            <Icon><span class="material-symbols-outlined">checklist</span></Icon>
          }
        >
        </StandardIconButton>
        <Label size='small'>Use Cases</Label>
      </div>
    </div>
  )
}
