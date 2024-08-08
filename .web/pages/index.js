/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs } from "/utils/state"
import { ArrowDownIcon as LucideArrowDownIcon, ArrowDownUpIcon as LucideArrowDownUpIcon, ArrowUpIcon as LucideArrowUpIcon, CheckIcon as LucideCheckIcon, ChevronDownIcon as LucideChevronDownIcon, InboxIcon as LucideInboxIcon, PlusIcon as LucidePlusIcon, RotateCcwIcon as LucideRotateCcwIcon, UserIcon as LucideUserIcon, WifiOffIcon as LucideWifiOffIcon, XIcon as LucideXIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Callout as RadixThemesCallout, Card as RadixThemesCard, Dialog as RadixThemesDialog, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Popover as RadixThemesPopover, Select as RadixThemesSelect, Strong as RadixThemesStrong, Switch as RadixThemesSwitch, Table as RadixThemesTable, Text as RadixThemesText, TextField as RadixThemesTextField, Theme as RadixThemesTheme } from "@radix-ui/themes"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextLink from "next/link"
import { Drawer as VaulDrawer } from "vaul"
import theme from "/utils/theme.js"
import { DebounceInput } from "react-debounce-input"
import NextHead from "next/head"



const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Toaster_6e90e5e87a1cac8c96c683214079bef3 () {
  const { resolvedColorMode } = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
const toast_props = {"description": `Check if server is reachable at ${getBackendURL(env.EVENT).href}`, "closeButton": true, "duration": 120000, "id": "websocket-error"};
const [userDismissed, setUserDismissed] = useState(false);
useEffect(() => {
    if (connectErrors.length >= 2) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}, [connectErrors]);

  return (
    <Toaster closeButton={false} expand={true} position={`bottom-right`} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Fragment_cf53a535ae2e610a113dd361eb6ac95b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length > 0) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "33px", "right": "33px", "animation": `${pulse} 1s infinite`}} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Div_ac2a89ea84667d600a059f034bd91dfe () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={{"position": "fixed", "width": "100vw", "height": "0"}} title={`Connection Error: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}`}>
  <Fragment_cf53a535ae2e610a113dd361eb6ac95b/>
</div>
  )
}

export function Fragment_8363f1cb7b607ba411ea2c8f4c3b04df () {
  const reflex___state____state__app___app____login_state = useContext(StateContexts.reflex___state____state__app___app____login_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const reflex___state____state__app___main____page_state = useContext(StateContexts.reflex___state____state__app___main____page_state)
  const reflex___state____state__app___components___notifications____notification_state = useContext(StateContexts.reflex___state____state__app___components___notifications____notification_state)
  const reflex___state____state__app___pages___taskboard____taskboard_state = useContext(StateContexts.reflex___state____state__app___pages___taskboard____taskboard_state)
  
                useEffect(() => {
                    addEvents([Event("reflex___state____state.app___pages___customer_service____customer_service_state.get_data", {})])
                    return () => {
                        
                    }
                }, []);
  const reflex___state____state__app___components___lightbox____editing_state = useContext(StateContexts.reflex___state____state__app___components___lightbox____editing_state)
  const reflex___state____state__app___components___forms____form_state = useContext(StateContexts.reflex___state____state__app___components___forms____form_state)
  const reflex___state____state__app___pages___customer_service____customer_service_state = useContext(StateContexts.reflex___state____state__app___pages___customer_service____customer_service_state)
  const reflex___state____state__app___components___lightbox____viewing_state = useContext(StateContexts.reflex___state____state__app___components___lightbox____viewing_state)
  const reflex___state____state__app___components___form_fields____download_state = useContext(StateContexts.reflex___state____state__app___components___form_fields____download_state)
  const reflex___state____state__app___components___data_table____table_state = useContext(StateContexts.reflex___state____state__app___components___data_table____table_state)
  const reflex___state____state__app___pages___office___admin____admin_state = useContext(StateContexts.reflex___state____state__app___pages___office___admin____admin_state)
  const reflex___state____state__app___pages___office___office_phonebook____office_phonebook_state = useContext(StateContexts.reflex___state____state__app___pages___office___office_phonebook____office_phonebook_state)


  
    const handleSubmit_f4a64f608d7f8b637186faa5d74303a7 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("reflex___state____state.app___app____login_state.sign_in", {form_data:form_data})])

        if (false) {
            $form.reset()
        }
    })
    
  
    const handleSubmit_09423c28d7d3048987b76882bb97b5b9 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.handle_submit", {form_data:form_data})])

        if (false) {
            $form.reset()
        }
    })
    
  
    const handleSubmit_6093a679cd15df9b43281c78b0d21d57 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("reflex___state____state.app___pages___office___admin____admin_state.role_change", {form_data:form_data})])

        if (false) {
            $form.reset()
        }
    })
    
  
    const handleSubmit_0aa0b605993be3aafbd96f0d687c2f5c = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("reflex___state____state.app___pages___office___admin____admin_state.notes_change", {form_data:form_data})])

        if (false) {
            $form.reset()
        }
    })
    

  return (
    <Fragment>
  {isTrue(((reflex___state____state__app___app____login_state.user) !== (""))) ? (
  <Fragment>
  <RadixThemesCard css={{"maxWidth": "28em", "width": "100%"}} size={`4`}>
  <RadixFormRoot className={`Root `} css={{"width": "100%", "size": "4", "maxWidth": "28em"}} onSubmit={handleSubmit_f4a64f608d7f8b637186faa5d74303a7}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`6`}>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center", "width": "100%"}} direction={`column`} gap={`5`}>
  <img css={{"width": "2.5em", "height": "auto", "borderRadius": "25%"}} src={`/logo.jpg`}/>
  <RadixThemesHeading as={`h2`} css={{"textAlign": "center", "width": "100%"}} size={`6`}>
  {`Sign in to your account`}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`start`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"textAlign": "left", "width": "100%"}} size={`3`} weight={`medium`}>
  {`Username`}
</RadixThemesText>
  <RadixThemesTextField.Root css={{"width": "100%"}} name={`username`} placeholder={`Enter your username`} size={`3`}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} justify={`between`} gap={`3`}>
  <RadixThemesText as={`p`} size={`3`} weight={`medium`}>
  {`Password`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesTextField.Root css={{"width": "100%"}} name={`password`} placeholder={`Enter your password`} size={`3`} type={`password`}/>
</RadixThemesFlex>
  <RadixThemesButton css={{"width": "100%"}} size={`3`} type={`submit`}>
  {`Sign in`}
</RadixThemesButton>
  <Fragment>
  {isTrue(reflex___state____state__app___app____login_state.user_error) ? (
  <Fragment>
  <RadixThemesCallout.Root color={`red`} css={{"icon": "x", "width": "100%"}}>
  <RadixThemesCallout.Icon>
  <LucideXIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesCallout.Icon>
  <RadixThemesCallout.Text>
  {`Username not found`}
</RadixThemesCallout.Text>
</RadixThemesCallout.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(reflex___state____state__app___app____login_state.pass_error) ? (
  <Fragment>
  <RadixThemesCallout.Root color={`red`} css={{"icon": "x", "width": "100%"}}>
  <RadixThemesCallout.Icon>
  <LucideXIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesCallout.Icon>
  <RadixThemesCallout.Text>
  {`Incorrect password`}
</RadixThemesCallout.Text>
</RadixThemesCallout.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixFormRoot>
</RadixThemesCard>
</Fragment>
) : (
  <Fragment>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"padding": "10px"}} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesBox css={{"borderColor": "black", "borderWidth": "2px", "borderRadius": "10px", "padding": "10px", "width": "100%"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} justify={`between`} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} gap={`3`}>
  <RadixThemesHeading color={`blue`} size={`7`}>
  {`Coveted CRM`}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`5`}>
  <RadixThemesText as={`p`} color={`blue`} css={{"cursor": "pointer", "textDecoration": reflex___state____state__app___main____page_state.active_tab_variants["taskboard"]}} onClick={(_e) => addEvents([Event("reflex___state____state.app___main____page_state.set_active_tab", {tab_name:`taskboard`})], (_e), {})} size={`4`} weight={`medium`}>
  {`Taskboard`}
</RadixThemesText>
  <RadixThemesText as={`p`} color={`blue`} css={{"cursor": "pointer", "textDecoration": reflex___state____state__app___main____page_state.active_tab_variants["customer_service"]}} onClick={(_e) => addEvents([Event("reflex___state____state.app___main____page_state.set_active_tab", {tab_name:`customer_service`})], (_e), {})} size={`4`} weight={`medium`}>
  {`Customer Service`}
</RadixThemesText>
  <RadixThemesText as={`p`} color={`blue`} css={{"cursor": "pointer", "textDecoration": reflex___state____state__app___main____page_state.active_tab_variants["analytics"]}} onClick={(_e) => addEvents([Event("reflex___state____state.app___main____page_state.set_active_tab", {tab_name:`analytics`})], (_e), {})} size={`4`} weight={`medium`}>
  {`Analytics`}
</RadixThemesText>
  <RadixThemesDropdownMenu.Root>
  <RadixThemesDropdownMenu.Trigger>
  <RadixThemesButton css={{"weight": "medium"}} size={`3`} variant={`ghost`}>
  <RadixThemesText as={`p`} size={`4`} weight={`medium`}>
  {`Database`}
</RadixThemesText>
  <LucideChevronDownIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesButton>
</RadixThemesDropdownMenu.Trigger>
  <RadixThemesDropdownMenu.Content>
  <RadixThemesDropdownMenu.Item onClick={(_e) => addEvents([Event("reflex___state____state.app___main____page_state.set_active_tab", {tab_name:`retailers`})], (_e), {})}>
  {`Retailers`}
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item onClick={(_e) => addEvents([Event("reflex___state____state.app___main____page_state.set_active_tab", {tab_name:`products`})], (_e), {})}>
  {`Products`}
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item onClick={(_e) => addEvents([Event("reflex___state____state.app___main____page_state.set_active_tab", {tab_name:`associates`})], (_e), {})}>
  {`Associates`}
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item onClick={(_e) => addEvents([Event("reflex___state____state.app___main____page_state.set_active_tab", {tab_name:`clients`})], (_e), {})}>
  {`Clients`}
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item onClick={(_e) => addEvents([Event("reflex___state____state.app___main____page_state.set_active_tab", {tab_name:`brands`})], (_e), {})}>
  {`Brands`}
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item onClick={(_e) => addEvents([Event("reflex___state____state.app___main____page_state.set_active_tab", {tab_name:`items`})], (_e), {})}>
  {`Items`}
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item onClick={(_e) => addEvents([Event("reflex___state____state.app___main____page_state.set_active_tab", {tab_name:`profiles`})], (_e), {})}>
  {`Profiles`}
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
  <RadixThemesDropdownMenu.Root>
  <RadixThemesDropdownMenu.Trigger>
  <RadixThemesButton css={{"weight": "medium"}} size={`3`} variant={`ghost`}>
  <RadixThemesText as={`p`} size={`4`} weight={`medium`}>
  {`Office`}
</RadixThemesText>
  <LucideChevronDownIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesButton>
</RadixThemesDropdownMenu.Trigger>
  <RadixThemesDropdownMenu.Content>
  <RadixThemesDropdownMenu.Item onClick={(_e) => addEvents([Event("reflex___state____state.app___main____page_state.set_active_tab", {tab_name:`office_expenses`})], (_e), {})}>
  {`Office Expenses`}
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item onClick={(_e) => addEvents([Event("reflex___state____state.app___main____page_state.set_active_tab", {tab_name:`admin`})], (_e), {})}>
  {`Admin`}
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item onClick={(_e) => addEvents([Event("reflex___state____state.app___main____page_state.set_active_tab", {tab_name:`office_phonebook`})], (_e), {})}>
  {`Office Phonebook`}
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
  <RadixThemesDropdownMenu.Root>
  <RadixThemesDropdownMenu.Trigger>
  <RadixThemesButton css={{"weight": "medium"}} size={`3`} variant={`ghost`}>
  <RadixThemesText as={`p`} size={`4`} weight={`medium`}>
  {`Orders`}
</RadixThemesText>
  <LucideChevronDownIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesButton>
</RadixThemesDropdownMenu.Trigger>
  <RadixThemesDropdownMenu.Content>
  <RadixThemesDropdownMenu.Item onClick={(_e) => addEvents([Event("reflex___state____state.app___main____page_state.set_active_tab", {tab_name:`incoming_requests`})], (_e), {})}>
  {`Incoming Requests`}
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item onClick={(_e) => addEvents([Event("reflex___state____state.app___main____page_state.set_active_tab", {tab_name:`shopping_list`})], (_e), {})}>
  {`Shopping List`}
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item onClick={(_e) => addEvents([Event("reflex___state____state.app___main____page_state.set_active_tab", {tab_name:`order_fulfillment`})], (_e), {})}>
  {`Order Fulfillment`}
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Fragment>
  <RadixThemesDropdownMenu.Root css={{"justify": "end"}}>
  <RadixThemesDropdownMenu.Trigger>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`0`}>
  <RadixThemesButton variant={`ghost`}>
  <LucideInboxIcon css={{"color": "var(--current-color)"}} size={30}/>
  <RadixThemesBox css={{"backgroundColor": "red", "borderRadius": "5px", "paddingLeft": "3px", "paddingRight": "3px", "fontSize": "12px", "marginLeft": "-15px", "marginTop": "-20px"}}>
  <RadixThemesText as={`p`}>
  {reflex___state____state__app___components___notifications____notification_state.count}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesDropdownMenu.Trigger>
  <RadixThemesDropdownMenu.Content>
  <Fragment>
  {isTrue(reflex___state____state__app___components___notifications____notification_state.data) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  {reflex___state____state__app___components___notifications____notification_state.data.map((notification, index_76220fb924edf747) => (
  <RadixThemesCard asChild={true} css={{"height": "auto", "width": "300px"}} key={index_76220fb924edf747}>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___notifications____notification_state.mark_as_read", {notification_id:notification["_id"]})], (_e), {})}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesStrong>
  {notification["Description"]}
</RadixThemesStrong>
  <RadixThemesText as={`p`}>
  {`To: ${reflex___state____state__app___components___notifications____notification_state.user} on ${notification["Date"].slice(0, 10)}`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesButton>
</RadixThemesCard>
))}
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</Fragment>
  <RadixThemesDropdownMenu.Root css={{"justify": "end"}}>
  <RadixThemesDropdownMenu.Trigger>
  <RadixThemesIconButton css={{"padding": "6px"}} radius={`full`} size={`2`}>
  <LucideUserIcon css={{"color": "var(--current-color)"}} size={24}/>
</RadixThemesIconButton>
</RadixThemesDropdownMenu.Trigger>
  <RadixThemesDropdownMenu.Content>
  <RadixThemesDropdownMenu.Item>
  {`Settings`}
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Separator/>
  <RadixThemesDropdownMenu.Item color={`red`}>
  {`Log out`}
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
</RadixThemesBox>
  <Fragment>
  {isTrue(((reflex___state____state__app___main____page_state.active_tab) === ("taskboard"))) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesBox css={{"width": "100%", "textAlign": "center"}}>
  <RadixThemesHeading css={{"textAlign": "center"}} size={`8`}>
  {`Taskboard`}
</RadixThemesHeading>
</RadixThemesBox>
  <RadixThemesGrid columns={`3`} css={{"width": "100%"}} gap={`8`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`2`}>
  <RadixThemesHeading size={`6`}>
  {`Not Started`}
</RadixThemesHeading>
  {reflex___state____state__app___pages___taskboard____taskboard_state.not_started_tasks.map((item, index_50b3c72ad0903fe1) => (
  <RadixThemesCard asChild={true} key={index_50b3c72ad0903fe1}>
  <RadixThemesLink css={{"&:hover": {"color": "var(--accent-8)"}}} onClick={(_e) => addEvents([Event("reflex___state____state.app___pages___taskboard____taskboard_state.open_drawer", {item:item})], (_e), {})}>
  <RadixThemesFlex gap={`2`}>
  <RadixThemesBox>
  <RadixThemesHeading>
  {item["subject"]}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`Assignee: ${item["assignee"]}`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesLink>
</RadixThemesCard>
))}
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`2`}>
  <RadixThemesHeading size={`6`}>
  {`In Progress`}
</RadixThemesHeading>
  {reflex___state____state__app___pages___taskboard____taskboard_state.in_progress_tasks.map((item, index_50b3c72ad0903fe1) => (
  <RadixThemesCard asChild={true} key={index_50b3c72ad0903fe1}>
  <RadixThemesLink css={{"&:hover": {"color": "var(--accent-8)"}}} onClick={(_e) => addEvents([Event("reflex___state____state.app___pages___taskboard____taskboard_state.open_drawer", {item:item})], (_e), {})}>
  <RadixThemesFlex gap={`2`}>
  <RadixThemesBox>
  <RadixThemesHeading>
  {item["subject"]}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`Assignee: ${item["assignee"]}`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesLink>
</RadixThemesCard>
))}
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`2`}>
  <RadixThemesHeading size={`6`}>
  {`Done`}
</RadixThemesHeading>
  {reflex___state____state__app___pages___taskboard____taskboard_state.done_tasks.map((item, index_50b3c72ad0903fe1) => (
  <RadixThemesCard asChild={true} key={index_50b3c72ad0903fe1}>
  <RadixThemesLink css={{"&:hover": {"color": "var(--accent-8)"}}} onClick={(_e) => addEvents([Event("reflex___state____state.app___pages___taskboard____taskboard_state.open_drawer", {item:item})], (_e), {})}>
  <RadixThemesFlex gap={`2`}>
  <RadixThemesBox>
  <RadixThemesHeading>
  {item["subject"]}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`Assignee: ${item["assignee"]}`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesLink>
</RadixThemesCard>
))}
</RadixThemesFlex>
</RadixThemesGrid>
  <VaulDrawer.Root direction={`right`} open={reflex___state____state__app___pages___taskboard____taskboard_state.drawer_state}>
  <VaulDrawer.Overlay css={{"position": "fixed", "left": "0", "right": "0", "bottom": "0", "top": "0", "z_index": 50, "background": "rgba(0, 0, 0, 0.5)", "zIndex": "5"}}/>
  <VaulDrawer.Portal>
  <RadixThemesTheme css={{...theme.styles.global[':root'], ...theme.styles.global.body}}>
  <VaulDrawer.Content css={{"left": "auto", "right": "0", "bottom": "0", "top": "auto", "position": "fixed", "z_index": 50, "display": "flex", "height": "100%", "width": "20em", "padding": "2em", "backgroundColor": "#FFF"}}>
  <RadixThemesFlex css={{"alignItems": "start"}} direction={`column`}>
  <RadixThemesButton css={{"marginBottom": "8px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___pages___taskboard____taskboard_state.close_drawer", {})], (_e), {})}>
  {`Close`}
</RadixThemesButton>
  <RadixThemesText as={`p`} css={{"marginBottom": "8px", "color": "black"}} size={`5`} weight={`bold`}>
  {`Subject: ${reflex___state____state__app___pages___taskboard____taskboard_state.clicked_subject}`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"marginBottom": "8px", "color": "black"}} size={`5`} weight={`bold`}>
  {`Assignee: ${reflex___state____state__app___pages___taskboard____taskboard_state.clicked_assignee}`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"marginBottom": "8px", "color": "black"}} size={`5`} weight={`bold`}>
  {`Due Date: ${reflex___state____state__app___pages___taskboard____taskboard_state.clicked_due_date_time}`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"marginBottom": "8px", "color": "black"}} size={`5`} weight={`bold`}>
  {`Status: ${reflex___state____state__app___pages___taskboard____taskboard_state.clicked_status}`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"marginBottom": "8px", "color": "black"}} size={`5`} weight={`bold`}>
  {`Description: ${reflex___state____state__app___pages___taskboard____taskboard_state.clicked_description}`}
</RadixThemesText>
</RadixThemesFlex>
</VaulDrawer.Content>
</RadixThemesTheme>
</VaulDrawer.Portal>
</VaulDrawer.Root>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(((reflex___state____state__app___main____page_state.active_tab) === ("customer_service"))) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____editing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixFormRoot className={`Root `} css={{"width": "100%"}} onSubmit={handleSubmit_09423c28d7d3048987b76882bb97b5b9}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`Edit ${reflex___state____state__app___components___lightbox____editing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Location"]} name={`Location`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Retailer"]} name={`Retailer`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Pongers`}>
  {`Pongers`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mane Stores`}>
  {`Mane Stores`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Heart Collections`}>
  {`Heart Collections`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Subject"]} name={`Subject`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Details"]} name={`Details`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Priority"]} name={`Priority`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`High`}>
  {`High`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Medium`}>
  {`Medium`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Low`}>
  {`Low`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`New`}>
  {`New`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Progress`}>
  {`In Progress`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Resolved`}>
  {`Resolved`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Assigned Team Member"]} name={`Assigned Team Member`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Instagram`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Description"]} name={`Description`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Price"]} name={`Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date"]} name={`Date`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]} name={`Credit Card Used`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Retail Price"]} name={`Retail Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Tracking Number"]} name={`Tracking Number`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Purchased"]} name={`Date Purchased`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Received"]} name={`Date Received`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Hunting`}>
  {`Hunting`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Located`}>
  {`Located`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Client`}>
  {`Ordered to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Office`}>
  {`Ordered to Office`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Inventory`}>
  {`In Inventory`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shipped from Office to Client`}>
  {`Shipped from Office to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Received by Client`}>
  {`Received by Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Returned`}>
  {`Returned`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Product"]} name={`Product`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton Ping Pong Set`}>
  {`Louis Vuitton Ping Pong Set`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci Flip Flops`}>
  {`Gucci Flip Flops`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Black Prada Bag`}>
  {`Black Prada Bag`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior Sauvage`}>
  {`Dior Sauvage`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Selling Associate"]} name={`Selling Associate`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Chester Lee`}>
  {`Chester Lee`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Cool Guy`}>
  {`Cool Guy`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Josh Heart`}>
  {`Josh Heart`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Brand"]} name={`Brand`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton`}>
  {`Louis Vuitton`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci`}>
  {`Gucci`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Prada`}>
  {`Prada`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Chanel`}>
  {`Chanel`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior`}>
  {`Dior`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Hermes`}>
  {`Hermes`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Shipping Address"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]} name={`Preferred Shipment Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Dropship`}>
  {`Dropship`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ship to Company`}>
  {`Ship to Company`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Deadline"]} name={`Deadline`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <Fragment>
  {isTrue(reflex___state____state__app___components___forms____form_state.document["Paid For?"]) ? (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={true} name={`Paid For?`}/>
</Fragment>
) : (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={false} name={`Paid For?`}/>
</Fragment>
)}
</Fragment>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Shopper"]} name={`Shopper`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Buy Books: ${reflex___state____state__app___components___forms____form_state.document["Buy Books"]}`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Root>
  <RadixThemesDialog.Trigger>
  <RadixThemesButton color={`red`} type={`reset`}>
  {`Delete Request`}
</RadixThemesButton>
</RadixThemesDialog.Trigger>
  <RadixThemesDialog.Content size={`2`}>
  <RadixThemesDialog.Title>
  {`Are you sure you wish to delete?`}
</RadixThemesDialog.Title>
  <RadixThemesDialog.Close>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesButton color={`gray`}>
  {`Cancel`}
</RadixThemesButton>
  <RadixThemesButton color={`red`}>
  {`Delete`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesDialog.Close>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.open_box", {new_collection:`complaints`,new_doc:{}})], (_e), {})}>
  <LucidePlusIcon css={{"color": "var(--current-color)"}}/>
  {`New Ticket`}
</RadixThemesButton>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`Sort By:`}
</RadixThemesText>
  <RadixThemesSelect.Root onValueChange={(_e0) => addEvents([Event("reflex___state____state.app___pages___customer_service____customer_service_state.set_sort", {column:_e0})], (_e0), {})} value={reflex___state____state__app___pages___customer_service____customer_service_state.sort_value}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  {reflex___state____state__app___pages___customer_service____customer_service_state.sort_categories.map((item, index_150381d92f8fe7a3) => (
  <RadixThemesSelect.Item key={index_150381d92f8fe7a3} value={item}>
  {item}
</RadixThemesSelect.Item>
))}
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <DebounceInput debounceTimeout={300} element={RadixThemesTextField.Root} onChange={(_e0) => addEvents([Event("reflex___state____state.app___pages___customer_service____customer_service_state.set_search", {text:_e0.target.value})], (_e0), {})} placeholder={`Search...`} value={reflex___state____state__app___pages___customer_service____customer_service_state.search_value}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "400px"}} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`New (${reflex___state____state__app___pages___customer_service____customer_service_state.new_count})`}
</RadixThemesText>
  {reflex___state____state__app___pages___customer_service____customer_service_state.new_data.map((complaint, index_0d18f8f2f01704ad) => (
  <RadixThemesBox key={index_0d18f8f2f01704ad}>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____editing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixFormRoot className={`Root `} css={{"width": "100%"}} onSubmit={handleSubmit_09423c28d7d3048987b76882bb97b5b9}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`Edit ${reflex___state____state__app___components___lightbox____editing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Location"]} name={`Location`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Retailer"]} name={`Retailer`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Pongers`}>
  {`Pongers`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mane Stores`}>
  {`Mane Stores`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Heart Collections`}>
  {`Heart Collections`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Subject"]} name={`Subject`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Details"]} name={`Details`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Priority"]} name={`Priority`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`High`}>
  {`High`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Medium`}>
  {`Medium`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Low`}>
  {`Low`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`New`}>
  {`New`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Progress`}>
  {`In Progress`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Resolved`}>
  {`Resolved`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Assigned Team Member"]} name={`Assigned Team Member`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Instagram`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Description"]} name={`Description`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Price"]} name={`Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date"]} name={`Date`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]} name={`Credit Card Used`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Retail Price"]} name={`Retail Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Tracking Number"]} name={`Tracking Number`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Purchased"]} name={`Date Purchased`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Received"]} name={`Date Received`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Hunting`}>
  {`Hunting`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Located`}>
  {`Located`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Client`}>
  {`Ordered to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Office`}>
  {`Ordered to Office`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Inventory`}>
  {`In Inventory`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shipped from Office to Client`}>
  {`Shipped from Office to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Received by Client`}>
  {`Received by Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Returned`}>
  {`Returned`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Product"]} name={`Product`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton Ping Pong Set`}>
  {`Louis Vuitton Ping Pong Set`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci Flip Flops`}>
  {`Gucci Flip Flops`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Black Prada Bag`}>
  {`Black Prada Bag`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior Sauvage`}>
  {`Dior Sauvage`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Selling Associate"]} name={`Selling Associate`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Chester Lee`}>
  {`Chester Lee`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Cool Guy`}>
  {`Cool Guy`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Josh Heart`}>
  {`Josh Heart`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Brand"]} name={`Brand`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton`}>
  {`Louis Vuitton`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci`}>
  {`Gucci`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Prada`}>
  {`Prada`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Chanel`}>
  {`Chanel`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior`}>
  {`Dior`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Hermes`}>
  {`Hermes`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Shipping Address"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]} name={`Preferred Shipment Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Dropship`}>
  {`Dropship`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ship to Company`}>
  {`Ship to Company`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Deadline"]} name={`Deadline`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <Fragment>
  {isTrue(reflex___state____state__app___components___forms____form_state.document["Paid For?"]) ? (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={true} name={`Paid For?`}/>
</Fragment>
) : (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={false} name={`Paid For?`}/>
</Fragment>
)}
</Fragment>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Shopper"]} name={`Shopper`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Buy Books: ${reflex___state____state__app___components___forms____form_state.document["Buy Books"]}`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Root>
  <RadixThemesDialog.Trigger>
  <RadixThemesButton color={`red`} type={`reset`}>
  {`Delete Request`}
</RadixThemesButton>
</RadixThemesDialog.Trigger>
  <RadixThemesDialog.Content size={`2`}>
  <RadixThemesDialog.Title>
  {`Are you sure you wish to delete?`}
</RadixThemesDialog.Title>
  <RadixThemesDialog.Close>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesButton color={`gray`}>
  {`Cancel`}
</RadixThemesButton>
  <RadixThemesButton color={`red`}>
  {`Delete`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesDialog.Close>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____viewing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`View ${reflex___state____state__app___components___lightbox____viewing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Location"}}>
  {reflex___state____state__app___components___forms____form_state.document["Location"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailer"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailer"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Subject"}}>
  {reflex___state____state__app___components___forms____form_state.document["Subject"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Details"}}>
  {reflex___state____state__app___components___forms____form_state.document["Details"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Priority"}}>
  {reflex___state____state__app___components___forms____form_state.document["Priority"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Assigned Team Member"}}>
  {reflex___state____state__app___components___forms____form_state.document["Assigned Team Member"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Instagram"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Description"}}>
  {reflex___state____state__app___components___forms____form_state.document["Description"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card Used"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retail Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Retail Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Tracking Number"}}>
  {reflex___state____state__app___components___forms____form_state.document["Tracking Number"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Purchased"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Purchased"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Received"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Received"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Product"}}>
  {reflex___state____state__app___components___forms____form_state.references["Product"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Selling Associate"}}>
  {reflex___state____state__app___components___forms____form_state.references["Selling Associate"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Request`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Request"}}>
  {`R-${reflex___state____state__app___components___forms____form_state.document["Request"]}`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Photos`}
</RadixThemesStrong>
  <RadixThemesPopover.Root>
  <RadixThemesPopover.Trigger>
  <RadixThemesFlex>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___form_fields____download_state.get_files", {key:`Photos`,files:reflex___state____state__app___components___forms____form_state.document["Photos"]})], (_e), {})} variant={`soft`}>
  {`Download Files`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesPopover.Trigger>
  <RadixThemesPopover.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  {reflex___state____state__app___components___form_fields____download_state.images.map((image, index_a368c70459e43df8) => (
  <RadixThemesButton css={{"width": "100%"}} key={index_a368c70459e43df8} onClick={(_e) => addEvents([Event("_download", {url:image,filename:``})], (_e), {})} variant={`ghost`}>
  <img css={{"height": "50px", "width": "50px"}} src={image}/>
</RadixThemesButton>
))}
</RadixThemesFlex>
</RadixThemesPopover.Content>
</RadixThemesPopover.Root>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brand"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brand"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shipping Address"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailers`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailers"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailers"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Purchased Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Purchased Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Purchased Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Shipment Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Deadline"}}>
  {reflex___state____state__app___components___forms____form_state.document["Deadline"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Paid For?"}}>
  {reflex___state____state__app___components___forms____form_state.document["Paid For?"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Client`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Client"}}>
  {reflex___state____state__app___components___forms____form_state.document["Client"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Item`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Item"}}>
  {reflex___state____state__app___components___forms____form_state.document["Item"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shopper"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shopper"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Buy Books`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Buy Books"}}>
  {reflex___state____state__app___components___forms____form_state.document["Buy Books"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Associates`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Associates"}}>
  {reflex___state____state__app___components___forms____form_state.references["Associates"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brands`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brands"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brands"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.handle_edit", {collection:reflex___state____state__app___components___lightbox____viewing_state.collection,doc:reflex___state____state__app___components___lightbox____viewing_state.doc})], (_e), {})}>
  {`Edit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesCard asChild={true} css={{"padding": "8%", "height": "auto", "width": "390px"}} size={`5`}>
  <RadixThemesButton css={{"width": "100%"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.open_box", {new_collection:`complaints`,new_doc:complaint})], (_e), {})}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong css={{"font-size": "1.5em"}}>
  {`#${complaint["_id"]} ${complaint["Subject"]}`}
</RadixThemesStrong>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Created: ${complaint["Upload Date"].slice(0, 8)} by ${complaint["Created By"]}`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`Priority: ${complaint["Priority"]}`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</RadixThemesCard>
</RadixThemesBox>
))}
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "400px"}} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`In Progress (${reflex___state____state__app___pages___customer_service____customer_service_state.inprogress_count})`}
</RadixThemesText>
  {reflex___state____state__app___pages___customer_service____customer_service_state.inprogress_data.map((complaint, index_0d18f8f2f01704ad) => (
  <RadixThemesBox key={index_0d18f8f2f01704ad}>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____editing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixFormRoot className={`Root `} css={{"width": "100%"}} onSubmit={handleSubmit_09423c28d7d3048987b76882bb97b5b9}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`Edit ${reflex___state____state__app___components___lightbox____editing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Location"]} name={`Location`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Retailer"]} name={`Retailer`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Pongers`}>
  {`Pongers`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mane Stores`}>
  {`Mane Stores`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Heart Collections`}>
  {`Heart Collections`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Subject"]} name={`Subject`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Details"]} name={`Details`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Priority"]} name={`Priority`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`High`}>
  {`High`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Medium`}>
  {`Medium`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Low`}>
  {`Low`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`New`}>
  {`New`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Progress`}>
  {`In Progress`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Resolved`}>
  {`Resolved`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Assigned Team Member"]} name={`Assigned Team Member`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Instagram`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Description"]} name={`Description`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Price"]} name={`Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date"]} name={`Date`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]} name={`Credit Card Used`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Retail Price"]} name={`Retail Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Tracking Number"]} name={`Tracking Number`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Purchased"]} name={`Date Purchased`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Received"]} name={`Date Received`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Hunting`}>
  {`Hunting`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Located`}>
  {`Located`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Client`}>
  {`Ordered to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Office`}>
  {`Ordered to Office`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Inventory`}>
  {`In Inventory`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shipped from Office to Client`}>
  {`Shipped from Office to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Received by Client`}>
  {`Received by Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Returned`}>
  {`Returned`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Product"]} name={`Product`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton Ping Pong Set`}>
  {`Louis Vuitton Ping Pong Set`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci Flip Flops`}>
  {`Gucci Flip Flops`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Black Prada Bag`}>
  {`Black Prada Bag`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior Sauvage`}>
  {`Dior Sauvage`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Selling Associate"]} name={`Selling Associate`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Chester Lee`}>
  {`Chester Lee`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Cool Guy`}>
  {`Cool Guy`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Josh Heart`}>
  {`Josh Heart`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Brand"]} name={`Brand`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton`}>
  {`Louis Vuitton`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci`}>
  {`Gucci`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Prada`}>
  {`Prada`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Chanel`}>
  {`Chanel`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior`}>
  {`Dior`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Hermes`}>
  {`Hermes`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Shipping Address"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]} name={`Preferred Shipment Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Dropship`}>
  {`Dropship`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ship to Company`}>
  {`Ship to Company`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Deadline"]} name={`Deadline`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <Fragment>
  {isTrue(reflex___state____state__app___components___forms____form_state.document["Paid For?"]) ? (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={true} name={`Paid For?`}/>
</Fragment>
) : (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={false} name={`Paid For?`}/>
</Fragment>
)}
</Fragment>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Shopper"]} name={`Shopper`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Buy Books: ${reflex___state____state__app___components___forms____form_state.document["Buy Books"]}`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Root>
  <RadixThemesDialog.Trigger>
  <RadixThemesButton color={`red`} type={`reset`}>
  {`Delete Request`}
</RadixThemesButton>
</RadixThemesDialog.Trigger>
  <RadixThemesDialog.Content size={`2`}>
  <RadixThemesDialog.Title>
  {`Are you sure you wish to delete?`}
</RadixThemesDialog.Title>
  <RadixThemesDialog.Close>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesButton color={`gray`}>
  {`Cancel`}
</RadixThemesButton>
  <RadixThemesButton color={`red`}>
  {`Delete`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesDialog.Close>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____viewing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`View ${reflex___state____state__app___components___lightbox____viewing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Location"}}>
  {reflex___state____state__app___components___forms____form_state.document["Location"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailer"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailer"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Subject"}}>
  {reflex___state____state__app___components___forms____form_state.document["Subject"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Details"}}>
  {reflex___state____state__app___components___forms____form_state.document["Details"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Priority"}}>
  {reflex___state____state__app___components___forms____form_state.document["Priority"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Assigned Team Member"}}>
  {reflex___state____state__app___components___forms____form_state.document["Assigned Team Member"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Instagram"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Description"}}>
  {reflex___state____state__app___components___forms____form_state.document["Description"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card Used"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retail Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Retail Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Tracking Number"}}>
  {reflex___state____state__app___components___forms____form_state.document["Tracking Number"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Purchased"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Purchased"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Received"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Received"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Product"}}>
  {reflex___state____state__app___components___forms____form_state.references["Product"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Selling Associate"}}>
  {reflex___state____state__app___components___forms____form_state.references["Selling Associate"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Request`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Request"}}>
  {`R-${reflex___state____state__app___components___forms____form_state.document["Request"]}`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Photos`}
</RadixThemesStrong>
  <RadixThemesPopover.Root>
  <RadixThemesPopover.Trigger>
  <RadixThemesFlex>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___form_fields____download_state.get_files", {key:`Photos`,files:reflex___state____state__app___components___forms____form_state.document["Photos"]})], (_e), {})} variant={`soft`}>
  {`Download Files`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesPopover.Trigger>
  <RadixThemesPopover.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  {reflex___state____state__app___components___form_fields____download_state.images.map((image, index_a368c70459e43df8) => (
  <RadixThemesButton css={{"width": "100%"}} key={index_a368c70459e43df8} onClick={(_e) => addEvents([Event("_download", {url:image,filename:``})], (_e), {})} variant={`ghost`}>
  <img css={{"height": "50px", "width": "50px"}} src={image}/>
</RadixThemesButton>
))}
</RadixThemesFlex>
</RadixThemesPopover.Content>
</RadixThemesPopover.Root>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brand"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brand"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shipping Address"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailers`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailers"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailers"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Purchased Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Purchased Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Purchased Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Shipment Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Deadline"}}>
  {reflex___state____state__app___components___forms____form_state.document["Deadline"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Paid For?"}}>
  {reflex___state____state__app___components___forms____form_state.document["Paid For?"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Client`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Client"}}>
  {reflex___state____state__app___components___forms____form_state.document["Client"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Item`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Item"}}>
  {reflex___state____state__app___components___forms____form_state.document["Item"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shopper"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shopper"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Buy Books`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Buy Books"}}>
  {reflex___state____state__app___components___forms____form_state.document["Buy Books"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Associates`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Associates"}}>
  {reflex___state____state__app___components___forms____form_state.references["Associates"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brands`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brands"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brands"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.handle_edit", {collection:reflex___state____state__app___components___lightbox____viewing_state.collection,doc:reflex___state____state__app___components___lightbox____viewing_state.doc})], (_e), {})}>
  {`Edit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesCard asChild={true} css={{"padding": "8%", "height": "auto", "width": "390px"}} size={`5`}>
  <RadixThemesButton css={{"width": "100%"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.open_box", {new_collection:`complaints`,new_doc:complaint})], (_e), {})}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong css={{"font-size": "1.5em"}}>
  {`#${complaint["_id"]} ${complaint["Subject"]}`}
</RadixThemesStrong>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Created: ${complaint["Upload Date"].slice(0, 8)} by ${complaint["Created By"]}`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`Priority: ${complaint["Priority"]}`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</RadixThemesCard>
</RadixThemesBox>
))}
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "400px"}} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Resolved (${reflex___state____state__app___pages___customer_service____customer_service_state.resolved_count})`}
</RadixThemesText>
  {reflex___state____state__app___pages___customer_service____customer_service_state.resolved_data.map((complaint, index_0d18f8f2f01704ad) => (
  <RadixThemesBox key={index_0d18f8f2f01704ad}>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____editing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixFormRoot className={`Root `} css={{"width": "100%"}} onSubmit={handleSubmit_09423c28d7d3048987b76882bb97b5b9}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`Edit ${reflex___state____state__app___components___lightbox____editing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Location"]} name={`Location`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Retailer"]} name={`Retailer`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Pongers`}>
  {`Pongers`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mane Stores`}>
  {`Mane Stores`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Heart Collections`}>
  {`Heart Collections`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Subject"]} name={`Subject`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Details"]} name={`Details`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Priority"]} name={`Priority`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`High`}>
  {`High`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Medium`}>
  {`Medium`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Low`}>
  {`Low`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`New`}>
  {`New`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Progress`}>
  {`In Progress`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Resolved`}>
  {`Resolved`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Assigned Team Member"]} name={`Assigned Team Member`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Instagram`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Description"]} name={`Description`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Price"]} name={`Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date"]} name={`Date`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]} name={`Credit Card Used`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Retail Price"]} name={`Retail Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Tracking Number"]} name={`Tracking Number`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Purchased"]} name={`Date Purchased`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Received"]} name={`Date Received`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Hunting`}>
  {`Hunting`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Located`}>
  {`Located`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Client`}>
  {`Ordered to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Office`}>
  {`Ordered to Office`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Inventory`}>
  {`In Inventory`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shipped from Office to Client`}>
  {`Shipped from Office to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Received by Client`}>
  {`Received by Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Returned`}>
  {`Returned`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Product"]} name={`Product`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton Ping Pong Set`}>
  {`Louis Vuitton Ping Pong Set`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci Flip Flops`}>
  {`Gucci Flip Flops`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Black Prada Bag`}>
  {`Black Prada Bag`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior Sauvage`}>
  {`Dior Sauvage`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Selling Associate"]} name={`Selling Associate`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Chester Lee`}>
  {`Chester Lee`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Cool Guy`}>
  {`Cool Guy`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Josh Heart`}>
  {`Josh Heart`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Brand"]} name={`Brand`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton`}>
  {`Louis Vuitton`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci`}>
  {`Gucci`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Prada`}>
  {`Prada`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Chanel`}>
  {`Chanel`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior`}>
  {`Dior`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Hermes`}>
  {`Hermes`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Shipping Address"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]} name={`Preferred Shipment Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Dropship`}>
  {`Dropship`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ship to Company`}>
  {`Ship to Company`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Deadline"]} name={`Deadline`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <Fragment>
  {isTrue(reflex___state____state__app___components___forms____form_state.document["Paid For?"]) ? (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={true} name={`Paid For?`}/>
</Fragment>
) : (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={false} name={`Paid For?`}/>
</Fragment>
)}
</Fragment>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Shopper"]} name={`Shopper`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Buy Books: ${reflex___state____state__app___components___forms____form_state.document["Buy Books"]}`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Root>
  <RadixThemesDialog.Trigger>
  <RadixThemesButton color={`red`} type={`reset`}>
  {`Delete Request`}
</RadixThemesButton>
</RadixThemesDialog.Trigger>
  <RadixThemesDialog.Content size={`2`}>
  <RadixThemesDialog.Title>
  {`Are you sure you wish to delete?`}
</RadixThemesDialog.Title>
  <RadixThemesDialog.Close>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesButton color={`gray`}>
  {`Cancel`}
</RadixThemesButton>
  <RadixThemesButton color={`red`}>
  {`Delete`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesDialog.Close>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____viewing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`View ${reflex___state____state__app___components___lightbox____viewing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Location"}}>
  {reflex___state____state__app___components___forms____form_state.document["Location"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailer"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailer"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Subject"}}>
  {reflex___state____state__app___components___forms____form_state.document["Subject"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Details"}}>
  {reflex___state____state__app___components___forms____form_state.document["Details"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Priority"}}>
  {reflex___state____state__app___components___forms____form_state.document["Priority"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Assigned Team Member"}}>
  {reflex___state____state__app___components___forms____form_state.document["Assigned Team Member"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Instagram"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Description"}}>
  {reflex___state____state__app___components___forms____form_state.document["Description"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card Used"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retail Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Retail Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Tracking Number"}}>
  {reflex___state____state__app___components___forms____form_state.document["Tracking Number"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Purchased"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Purchased"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Received"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Received"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Product"}}>
  {reflex___state____state__app___components___forms____form_state.references["Product"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Selling Associate"}}>
  {reflex___state____state__app___components___forms____form_state.references["Selling Associate"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Request`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Request"}}>
  {`R-${reflex___state____state__app___components___forms____form_state.document["Request"]}`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Photos`}
</RadixThemesStrong>
  <RadixThemesPopover.Root>
  <RadixThemesPopover.Trigger>
  <RadixThemesFlex>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___form_fields____download_state.get_files", {key:`Photos`,files:reflex___state____state__app___components___forms____form_state.document["Photos"]})], (_e), {})} variant={`soft`}>
  {`Download Files`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesPopover.Trigger>
  <RadixThemesPopover.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  {reflex___state____state__app___components___form_fields____download_state.images.map((image, index_a368c70459e43df8) => (
  <RadixThemesButton css={{"width": "100%"}} key={index_a368c70459e43df8} onClick={(_e) => addEvents([Event("_download", {url:image,filename:``})], (_e), {})} variant={`ghost`}>
  <img css={{"height": "50px", "width": "50px"}} src={image}/>
</RadixThemesButton>
))}
</RadixThemesFlex>
</RadixThemesPopover.Content>
</RadixThemesPopover.Root>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brand"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brand"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shipping Address"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailers`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailers"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailers"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Purchased Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Purchased Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Purchased Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Shipment Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Deadline"}}>
  {reflex___state____state__app___components___forms____form_state.document["Deadline"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Paid For?"}}>
  {reflex___state____state__app___components___forms____form_state.document["Paid For?"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Client`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Client"}}>
  {reflex___state____state__app___components___forms____form_state.document["Client"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Item`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Item"}}>
  {reflex___state____state__app___components___forms____form_state.document["Item"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shopper"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shopper"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Buy Books`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Buy Books"}}>
  {reflex___state____state__app___components___forms____form_state.document["Buy Books"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Associates`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Associates"}}>
  {reflex___state____state__app___components___forms____form_state.references["Associates"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brands`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brands"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brands"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.handle_edit", {collection:reflex___state____state__app___components___lightbox____viewing_state.collection,doc:reflex___state____state__app___components___lightbox____viewing_state.doc})], (_e), {})}>
  {`Edit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesCard asChild={true} css={{"padding": "8%", "height": "auto", "width": "390px"}} size={`5`}>
  <RadixThemesButton css={{"width": "100%"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.open_box", {new_collection:`complaints`,new_doc:complaint})], (_e), {})}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong css={{"font-size": "1.5em"}}>
  {`#${complaint["_id"]} ${complaint["Subject"]}`}
</RadixThemesStrong>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Created: ${complaint["Upload Date"].slice(0, 8)} by ${complaint["Created By"]}`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`Priority: ${complaint["Priority"]}`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</RadixThemesCard>
</RadixThemesBox>
))}
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`gray`} onClick={(_e) => addEvents([Event("reflex___state____state.app___pages___customer_service____customer_service_state.handle_refresh", {})], (_e), {})} size={`2`} variant={`ghost`}>
  <LucideRotateCcwIcon css={{"color": "var(--current-color)"}} size={18}/>
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(((reflex___state____state__app___main____page_state.active_tab) === ("analytics"))) ? (
  <Fragment>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`8`}>
  {`Analytics/Reporting`}
</RadixThemesHeading>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesCard css={{"width": "30%"}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`4`}>
  {`Description`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`This page utilizes all data involved with every aspect of the CRM. Here you will be able to view a breakdown of absolutely any combination of data we have. All datapoints can be sorted, filtered, columns rearranged, lists exported, times isolated, etc. Admins will be able to see any and all data created by any user. Lower level users will be able to see data that pertains to them. Shoppers will be able to analyze their purchases, sales, commissions, etc. using this page.`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesCard>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`4`}>
  {`Rank`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`9/10`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesCard>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`4`}>
  {`Priority`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`High`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(((reflex___state____state__app___main____page_state.active_tab) === ("retailers"))) ? (
  <Fragment>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`center`} gap={`3`}>
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.doc_type) === ("retailers"))) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.open_box", {new_collection:reflex___state____state__app___components___data_table____table_state.doc_type,new_doc:{}})], (_e), {})}>
  <LucidePlusIcon css={{"color": "var(--current-color)"}}/>
  {`New ${reflex___state____state__app___components___data_table____table_state.doc_type}`}
</RadixThemesButton>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____viewing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`View ${reflex___state____state__app___components___lightbox____viewing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Location"}}>
  {reflex___state____state__app___components___forms____form_state.document["Location"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailer"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailer"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Subject"}}>
  {reflex___state____state__app___components___forms____form_state.document["Subject"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Details"}}>
  {reflex___state____state__app___components___forms____form_state.document["Details"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Priority"}}>
  {reflex___state____state__app___components___forms____form_state.document["Priority"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Assigned Team Member"}}>
  {reflex___state____state__app___components___forms____form_state.document["Assigned Team Member"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Instagram"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Description"}}>
  {reflex___state____state__app___components___forms____form_state.document["Description"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card Used"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retail Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Retail Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Tracking Number"}}>
  {reflex___state____state__app___components___forms____form_state.document["Tracking Number"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Purchased"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Purchased"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Received"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Received"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Product"}}>
  {reflex___state____state__app___components___forms____form_state.references["Product"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Selling Associate"}}>
  {reflex___state____state__app___components___forms____form_state.references["Selling Associate"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Request`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Request"}}>
  {`R-${reflex___state____state__app___components___forms____form_state.document["Request"]}`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Photos`}
</RadixThemesStrong>
  <RadixThemesPopover.Root>
  <RadixThemesPopover.Trigger>
  <RadixThemesFlex>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___form_fields____download_state.get_files", {key:`Photos`,files:reflex___state____state__app___components___forms____form_state.document["Photos"]})], (_e), {})} variant={`soft`}>
  {`Download Files`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesPopover.Trigger>
  <RadixThemesPopover.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  {reflex___state____state__app___components___form_fields____download_state.images.map((image, index_a368c70459e43df8) => (
  <RadixThemesButton css={{"width": "100%"}} key={index_a368c70459e43df8} onClick={(_e) => addEvents([Event("_download", {url:image,filename:``})], (_e), {})} variant={`ghost`}>
  <img css={{"height": "50px", "width": "50px"}} src={image}/>
</RadixThemesButton>
))}
</RadixThemesFlex>
</RadixThemesPopover.Content>
</RadixThemesPopover.Root>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brand"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brand"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shipping Address"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailers`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailers"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailers"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Purchased Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Purchased Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Purchased Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Shipment Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Deadline"}}>
  {reflex___state____state__app___components___forms____form_state.document["Deadline"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Paid For?"}}>
  {reflex___state____state__app___components___forms____form_state.document["Paid For?"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Client`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Client"}}>
  {reflex___state____state__app___components___forms____form_state.document["Client"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Item`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Item"}}>
  {reflex___state____state__app___components___forms____form_state.document["Item"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shopper"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shopper"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Buy Books`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Buy Books"}}>
  {reflex___state____state__app___components___forms____form_state.document["Buy Books"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Associates`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Associates"}}>
  {reflex___state____state__app___components___forms____form_state.references["Associates"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brands`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brands"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brands"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.handle_edit", {collection:reflex___state____state__app___components___lightbox____viewing_state.collection,doc:reflex___state____state__app___components___lightbox____viewing_state.doc})], (_e), {})}>
  {`Edit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____editing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixFormRoot className={`Root `} css={{"width": "100%"}} onSubmit={handleSubmit_09423c28d7d3048987b76882bb97b5b9}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`Edit ${reflex___state____state__app___components___lightbox____editing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Location"]} name={`Location`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Retailer"]} name={`Retailer`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Pongers`}>
  {`Pongers`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mane Stores`}>
  {`Mane Stores`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Heart Collections`}>
  {`Heart Collections`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Subject"]} name={`Subject`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Details"]} name={`Details`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Priority"]} name={`Priority`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`High`}>
  {`High`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Medium`}>
  {`Medium`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Low`}>
  {`Low`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`New`}>
  {`New`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Progress`}>
  {`In Progress`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Resolved`}>
  {`Resolved`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Assigned Team Member"]} name={`Assigned Team Member`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Instagram`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Description"]} name={`Description`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Price"]} name={`Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date"]} name={`Date`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]} name={`Credit Card Used`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Retail Price"]} name={`Retail Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Tracking Number"]} name={`Tracking Number`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Purchased"]} name={`Date Purchased`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Received"]} name={`Date Received`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Hunting`}>
  {`Hunting`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Located`}>
  {`Located`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Client`}>
  {`Ordered to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Office`}>
  {`Ordered to Office`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Inventory`}>
  {`In Inventory`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shipped from Office to Client`}>
  {`Shipped from Office to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Received by Client`}>
  {`Received by Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Returned`}>
  {`Returned`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Product"]} name={`Product`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton Ping Pong Set`}>
  {`Louis Vuitton Ping Pong Set`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci Flip Flops`}>
  {`Gucci Flip Flops`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Black Prada Bag`}>
  {`Black Prada Bag`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior Sauvage`}>
  {`Dior Sauvage`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Selling Associate"]} name={`Selling Associate`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Chester Lee`}>
  {`Chester Lee`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Cool Guy`}>
  {`Cool Guy`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Josh Heart`}>
  {`Josh Heart`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Brand"]} name={`Brand`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton`}>
  {`Louis Vuitton`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci`}>
  {`Gucci`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Prada`}>
  {`Prada`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Chanel`}>
  {`Chanel`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior`}>
  {`Dior`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Hermes`}>
  {`Hermes`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Shipping Address"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]} name={`Preferred Shipment Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Dropship`}>
  {`Dropship`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ship to Company`}>
  {`Ship to Company`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Deadline"]} name={`Deadline`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <Fragment>
  {isTrue(reflex___state____state__app___components___forms____form_state.document["Paid For?"]) ? (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={true} name={`Paid For?`}/>
</Fragment>
) : (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={false} name={`Paid For?`}/>
</Fragment>
)}
</Fragment>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Shopper"]} name={`Shopper`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Buy Books: ${reflex___state____state__app___components___forms____form_state.document["Buy Books"]}`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Root>
  <RadixThemesDialog.Trigger>
  <RadixThemesButton color={`red`} type={`reset`}>
  {`Delete Request`}
</RadixThemesButton>
</RadixThemesDialog.Trigger>
  <RadixThemesDialog.Content size={`2`}>
  <RadixThemesDialog.Title>
  {`Are you sure you wish to delete?`}
</RadixThemesDialog.Title>
  <RadixThemesDialog.Close>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesButton color={`gray`}>
  {`Cancel`}
</RadixThemesButton>
  <RadixThemesButton color={`red`}>
  {`Delete`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesDialog.Close>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`Sort By:`}
</RadixThemesText>
  <RadixThemesSelect.Root onValueChange={(_e0) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_sort", {column:_e0})], (_e0), {})} value={reflex___state____state__app___components___data_table____table_state.sort_value}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  {reflex___state____state__app___components___data_table____table_state.column_headers.map((item, index_150381d92f8fe7a3) => (
  <RadixThemesSelect.Item key={index_150381d92f8fe7a3} value={item}>
  {item}
</RadixThemesSelect.Item>
))}
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <DebounceInput debounceTimeout={300} element={RadixThemesTextField.Root} onChange={(_e0) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_search", {text:_e0.target.value})], (_e0), {})} placeholder={`Search...`} value={reflex___state____state__app___components___data_table____table_state.search_value}/>
</RadixThemesFlex>
  <RadixThemesTable.Root css={{"width": "100%"}} variant={`surface`}>
  <RadixThemesTable.Header css={{"width": "100%"}}>
  <RadixThemesTable.Row>
  {reflex___state____state__app___components___data_table____table_state.column_headers.map((column, index_d9edfb4c366e192b) => (
  <RadixThemesTable.ColumnHeaderCell key={index_d9edfb4c366e192b} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_sort", {column:column})], (_e), {})}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {column}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.sort_value) === (column))) ? (
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.sort_direction) === ("asc"))) ? (
  <Fragment>
  <LucideArrowUpIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
)}
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownUpIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
))}
</RadixThemesTable.Row>
</RadixThemesTable.Header>
  <RadixThemesTable.Body css={{"width": "100%"}}>
  {reflex___state____state__app___components___data_table____table_state.current_data.map((doc, index_07b933202c915c5d) => (
  <RadixThemesTable.Row key={index_07b933202c915c5d} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.open_box", {new_collection:reflex___state____state__app___components___data_table____table_state.doc_type,new_doc:doc})], (_e), {})}>
  {Object.entries(doc).map((entry, index_c68b4c0e4a37a414) => (
  <RadixThemesTable.Cell key={index_c68b4c0e4a37a414}>
  {entry.at(1)}
</RadixThemesTable.Cell>
))}
</RadixThemesTable.Row>
))}
</RadixThemesTable.Body>
</RadixThemesTable.Root>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} justify={`center`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`} size={`2`}>
  {`${reflex___state____state__app___components___data_table____table_state.num_items} result(s)`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}} justify={`start`}/>
  <RadixThemesButton color={`gray`} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.handle_refresh", {})], (_e), {})} size={`2`} variant={`ghost`}>
  <LucideRotateCcwIcon css={{"color": "var(--current-color)"}} size={18}/>
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(((reflex___state____state__app___main____page_state.active_tab) === ("products"))) ? (
  <Fragment>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`center`} gap={`3`}>
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.doc_type) === ("products"))) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.open_box", {new_collection:reflex___state____state__app___components___data_table____table_state.doc_type,new_doc:{}})], (_e), {})}>
  <LucidePlusIcon css={{"color": "var(--current-color)"}}/>
  {`New ${reflex___state____state__app___components___data_table____table_state.doc_type}`}
</RadixThemesButton>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____viewing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`View ${reflex___state____state__app___components___lightbox____viewing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Location"}}>
  {reflex___state____state__app___components___forms____form_state.document["Location"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailer"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailer"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Subject"}}>
  {reflex___state____state__app___components___forms____form_state.document["Subject"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Details"}}>
  {reflex___state____state__app___components___forms____form_state.document["Details"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Priority"}}>
  {reflex___state____state__app___components___forms____form_state.document["Priority"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Assigned Team Member"}}>
  {reflex___state____state__app___components___forms____form_state.document["Assigned Team Member"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Instagram"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Description"}}>
  {reflex___state____state__app___components___forms____form_state.document["Description"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card Used"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retail Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Retail Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Tracking Number"}}>
  {reflex___state____state__app___components___forms____form_state.document["Tracking Number"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Purchased"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Purchased"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Received"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Received"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Product"}}>
  {reflex___state____state__app___components___forms____form_state.references["Product"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Selling Associate"}}>
  {reflex___state____state__app___components___forms____form_state.references["Selling Associate"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Request`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Request"}}>
  {`R-${reflex___state____state__app___components___forms____form_state.document["Request"]}`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Photos`}
</RadixThemesStrong>
  <RadixThemesPopover.Root>
  <RadixThemesPopover.Trigger>
  <RadixThemesFlex>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___form_fields____download_state.get_files", {key:`Photos`,files:reflex___state____state__app___components___forms____form_state.document["Photos"]})], (_e), {})} variant={`soft`}>
  {`Download Files`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesPopover.Trigger>
  <RadixThemesPopover.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  {reflex___state____state__app___components___form_fields____download_state.images.map((image, index_a368c70459e43df8) => (
  <RadixThemesButton css={{"width": "100%"}} key={index_a368c70459e43df8} onClick={(_e) => addEvents([Event("_download", {url:image,filename:``})], (_e), {})} variant={`ghost`}>
  <img css={{"height": "50px", "width": "50px"}} src={image}/>
</RadixThemesButton>
))}
</RadixThemesFlex>
</RadixThemesPopover.Content>
</RadixThemesPopover.Root>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brand"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brand"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shipping Address"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailers`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailers"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailers"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Purchased Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Purchased Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Purchased Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Shipment Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Deadline"}}>
  {reflex___state____state__app___components___forms____form_state.document["Deadline"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Paid For?"}}>
  {reflex___state____state__app___components___forms____form_state.document["Paid For?"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Client`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Client"}}>
  {reflex___state____state__app___components___forms____form_state.document["Client"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Item`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Item"}}>
  {reflex___state____state__app___components___forms____form_state.document["Item"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shopper"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shopper"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Buy Books`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Buy Books"}}>
  {reflex___state____state__app___components___forms____form_state.document["Buy Books"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Associates`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Associates"}}>
  {reflex___state____state__app___components___forms____form_state.references["Associates"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brands`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brands"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brands"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.handle_edit", {collection:reflex___state____state__app___components___lightbox____viewing_state.collection,doc:reflex___state____state__app___components___lightbox____viewing_state.doc})], (_e), {})}>
  {`Edit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____editing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixFormRoot className={`Root `} css={{"width": "100%"}} onSubmit={handleSubmit_09423c28d7d3048987b76882bb97b5b9}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`Edit ${reflex___state____state__app___components___lightbox____editing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Location"]} name={`Location`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Retailer"]} name={`Retailer`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Pongers`}>
  {`Pongers`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mane Stores`}>
  {`Mane Stores`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Heart Collections`}>
  {`Heart Collections`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Subject"]} name={`Subject`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Details"]} name={`Details`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Priority"]} name={`Priority`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`High`}>
  {`High`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Medium`}>
  {`Medium`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Low`}>
  {`Low`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`New`}>
  {`New`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Progress`}>
  {`In Progress`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Resolved`}>
  {`Resolved`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Assigned Team Member"]} name={`Assigned Team Member`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Instagram`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Description"]} name={`Description`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Price"]} name={`Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date"]} name={`Date`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]} name={`Credit Card Used`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Retail Price"]} name={`Retail Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Tracking Number"]} name={`Tracking Number`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Purchased"]} name={`Date Purchased`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Received"]} name={`Date Received`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Hunting`}>
  {`Hunting`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Located`}>
  {`Located`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Client`}>
  {`Ordered to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Office`}>
  {`Ordered to Office`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Inventory`}>
  {`In Inventory`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shipped from Office to Client`}>
  {`Shipped from Office to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Received by Client`}>
  {`Received by Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Returned`}>
  {`Returned`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Product"]} name={`Product`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton Ping Pong Set`}>
  {`Louis Vuitton Ping Pong Set`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci Flip Flops`}>
  {`Gucci Flip Flops`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Black Prada Bag`}>
  {`Black Prada Bag`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior Sauvage`}>
  {`Dior Sauvage`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Selling Associate"]} name={`Selling Associate`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Chester Lee`}>
  {`Chester Lee`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Cool Guy`}>
  {`Cool Guy`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Josh Heart`}>
  {`Josh Heart`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Brand"]} name={`Brand`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton`}>
  {`Louis Vuitton`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci`}>
  {`Gucci`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Prada`}>
  {`Prada`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Chanel`}>
  {`Chanel`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior`}>
  {`Dior`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Hermes`}>
  {`Hermes`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Shipping Address"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]} name={`Preferred Shipment Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Dropship`}>
  {`Dropship`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ship to Company`}>
  {`Ship to Company`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Deadline"]} name={`Deadline`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <Fragment>
  {isTrue(reflex___state____state__app___components___forms____form_state.document["Paid For?"]) ? (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={true} name={`Paid For?`}/>
</Fragment>
) : (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={false} name={`Paid For?`}/>
</Fragment>
)}
</Fragment>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Shopper"]} name={`Shopper`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Buy Books: ${reflex___state____state__app___components___forms____form_state.document["Buy Books"]}`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Root>
  <RadixThemesDialog.Trigger>
  <RadixThemesButton color={`red`} type={`reset`}>
  {`Delete Request`}
</RadixThemesButton>
</RadixThemesDialog.Trigger>
  <RadixThemesDialog.Content size={`2`}>
  <RadixThemesDialog.Title>
  {`Are you sure you wish to delete?`}
</RadixThemesDialog.Title>
  <RadixThemesDialog.Close>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesButton color={`gray`}>
  {`Cancel`}
</RadixThemesButton>
  <RadixThemesButton color={`red`}>
  {`Delete`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesDialog.Close>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`Sort By:`}
</RadixThemesText>
  <RadixThemesSelect.Root onValueChange={(_e0) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_sort", {column:_e0})], (_e0), {})} value={reflex___state____state__app___components___data_table____table_state.sort_value}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  {reflex___state____state__app___components___data_table____table_state.column_headers.map((item, index_150381d92f8fe7a3) => (
  <RadixThemesSelect.Item key={index_150381d92f8fe7a3} value={item}>
  {item}
</RadixThemesSelect.Item>
))}
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <DebounceInput debounceTimeout={300} element={RadixThemesTextField.Root} onChange={(_e0) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_search", {text:_e0.target.value})], (_e0), {})} placeholder={`Search...`} value={reflex___state____state__app___components___data_table____table_state.search_value}/>
</RadixThemesFlex>
  <RadixThemesTable.Root css={{"width": "100%"}} variant={`surface`}>
  <RadixThemesTable.Header css={{"width": "100%"}}>
  <RadixThemesTable.Row>
  {reflex___state____state__app___components___data_table____table_state.column_headers.map((column, index_d9edfb4c366e192b) => (
  <RadixThemesTable.ColumnHeaderCell key={index_d9edfb4c366e192b} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_sort", {column:column})], (_e), {})}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {column}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.sort_value) === (column))) ? (
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.sort_direction) === ("asc"))) ? (
  <Fragment>
  <LucideArrowUpIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
)}
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownUpIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
))}
</RadixThemesTable.Row>
</RadixThemesTable.Header>
  <RadixThemesTable.Body css={{"width": "100%"}}>
  {reflex___state____state__app___components___data_table____table_state.current_data.map((doc, index_07b933202c915c5d) => (
  <RadixThemesTable.Row key={index_07b933202c915c5d} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.open_box", {new_collection:reflex___state____state__app___components___data_table____table_state.doc_type,new_doc:doc})], (_e), {})}>
  {Object.entries(doc).map((entry, index_c68b4c0e4a37a414) => (
  <RadixThemesTable.Cell key={index_c68b4c0e4a37a414}>
  {entry.at(1)}
</RadixThemesTable.Cell>
))}
</RadixThemesTable.Row>
))}
</RadixThemesTable.Body>
</RadixThemesTable.Root>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} justify={`center`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`} size={`2`}>
  {`${reflex___state____state__app___components___data_table____table_state.num_items} result(s)`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}} justify={`start`}/>
  <RadixThemesButton color={`gray`} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.handle_refresh", {})], (_e), {})} size={`2`} variant={`ghost`}>
  <LucideRotateCcwIcon css={{"color": "var(--current-color)"}} size={18}/>
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(((reflex___state____state__app___main____page_state.active_tab) === ("associates"))) ? (
  <Fragment>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`center`} gap={`3`}>
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.doc_type) === ("associates"))) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.open_box", {new_collection:reflex___state____state__app___components___data_table____table_state.doc_type,new_doc:{}})], (_e), {})}>
  <LucidePlusIcon css={{"color": "var(--current-color)"}}/>
  {`New ${reflex___state____state__app___components___data_table____table_state.doc_type}`}
</RadixThemesButton>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____viewing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`View ${reflex___state____state__app___components___lightbox____viewing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Location"}}>
  {reflex___state____state__app___components___forms____form_state.document["Location"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailer"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailer"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Subject"}}>
  {reflex___state____state__app___components___forms____form_state.document["Subject"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Details"}}>
  {reflex___state____state__app___components___forms____form_state.document["Details"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Priority"}}>
  {reflex___state____state__app___components___forms____form_state.document["Priority"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Assigned Team Member"}}>
  {reflex___state____state__app___components___forms____form_state.document["Assigned Team Member"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Instagram"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Description"}}>
  {reflex___state____state__app___components___forms____form_state.document["Description"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card Used"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retail Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Retail Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Tracking Number"}}>
  {reflex___state____state__app___components___forms____form_state.document["Tracking Number"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Purchased"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Purchased"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Received"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Received"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Product"}}>
  {reflex___state____state__app___components___forms____form_state.references["Product"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Selling Associate"}}>
  {reflex___state____state__app___components___forms____form_state.references["Selling Associate"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Request`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Request"}}>
  {`R-${reflex___state____state__app___components___forms____form_state.document["Request"]}`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Photos`}
</RadixThemesStrong>
  <RadixThemesPopover.Root>
  <RadixThemesPopover.Trigger>
  <RadixThemesFlex>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___form_fields____download_state.get_files", {key:`Photos`,files:reflex___state____state__app___components___forms____form_state.document["Photos"]})], (_e), {})} variant={`soft`}>
  {`Download Files`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesPopover.Trigger>
  <RadixThemesPopover.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  {reflex___state____state__app___components___form_fields____download_state.images.map((image, index_a368c70459e43df8) => (
  <RadixThemesButton css={{"width": "100%"}} key={index_a368c70459e43df8} onClick={(_e) => addEvents([Event("_download", {url:image,filename:``})], (_e), {})} variant={`ghost`}>
  <img css={{"height": "50px", "width": "50px"}} src={image}/>
</RadixThemesButton>
))}
</RadixThemesFlex>
</RadixThemesPopover.Content>
</RadixThemesPopover.Root>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brand"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brand"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shipping Address"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailers`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailers"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailers"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Purchased Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Purchased Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Purchased Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Shipment Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Deadline"}}>
  {reflex___state____state__app___components___forms____form_state.document["Deadline"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Paid For?"}}>
  {reflex___state____state__app___components___forms____form_state.document["Paid For?"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Client`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Client"}}>
  {reflex___state____state__app___components___forms____form_state.document["Client"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Item`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Item"}}>
  {reflex___state____state__app___components___forms____form_state.document["Item"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shopper"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shopper"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Buy Books`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Buy Books"}}>
  {reflex___state____state__app___components___forms____form_state.document["Buy Books"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Associates`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Associates"}}>
  {reflex___state____state__app___components___forms____form_state.references["Associates"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brands`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brands"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brands"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.handle_edit", {collection:reflex___state____state__app___components___lightbox____viewing_state.collection,doc:reflex___state____state__app___components___lightbox____viewing_state.doc})], (_e), {})}>
  {`Edit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____editing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixFormRoot className={`Root `} css={{"width": "100%"}} onSubmit={handleSubmit_09423c28d7d3048987b76882bb97b5b9}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`Edit ${reflex___state____state__app___components___lightbox____editing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Location"]} name={`Location`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Retailer"]} name={`Retailer`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Pongers`}>
  {`Pongers`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mane Stores`}>
  {`Mane Stores`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Heart Collections`}>
  {`Heart Collections`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Subject"]} name={`Subject`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Details"]} name={`Details`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Priority"]} name={`Priority`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`High`}>
  {`High`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Medium`}>
  {`Medium`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Low`}>
  {`Low`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`New`}>
  {`New`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Progress`}>
  {`In Progress`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Resolved`}>
  {`Resolved`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Assigned Team Member"]} name={`Assigned Team Member`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Instagram`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Description"]} name={`Description`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Price"]} name={`Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date"]} name={`Date`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]} name={`Credit Card Used`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Retail Price"]} name={`Retail Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Tracking Number"]} name={`Tracking Number`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Purchased"]} name={`Date Purchased`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Received"]} name={`Date Received`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Hunting`}>
  {`Hunting`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Located`}>
  {`Located`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Client`}>
  {`Ordered to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Office`}>
  {`Ordered to Office`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Inventory`}>
  {`In Inventory`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shipped from Office to Client`}>
  {`Shipped from Office to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Received by Client`}>
  {`Received by Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Returned`}>
  {`Returned`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Product"]} name={`Product`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton Ping Pong Set`}>
  {`Louis Vuitton Ping Pong Set`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci Flip Flops`}>
  {`Gucci Flip Flops`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Black Prada Bag`}>
  {`Black Prada Bag`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior Sauvage`}>
  {`Dior Sauvage`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Selling Associate"]} name={`Selling Associate`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Chester Lee`}>
  {`Chester Lee`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Cool Guy`}>
  {`Cool Guy`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Josh Heart`}>
  {`Josh Heart`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Brand"]} name={`Brand`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton`}>
  {`Louis Vuitton`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci`}>
  {`Gucci`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Prada`}>
  {`Prada`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Chanel`}>
  {`Chanel`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior`}>
  {`Dior`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Hermes`}>
  {`Hermes`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Shipping Address"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]} name={`Preferred Shipment Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Dropship`}>
  {`Dropship`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ship to Company`}>
  {`Ship to Company`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Deadline"]} name={`Deadline`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <Fragment>
  {isTrue(reflex___state____state__app___components___forms____form_state.document["Paid For?"]) ? (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={true} name={`Paid For?`}/>
</Fragment>
) : (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={false} name={`Paid For?`}/>
</Fragment>
)}
</Fragment>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Shopper"]} name={`Shopper`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Buy Books: ${reflex___state____state__app___components___forms____form_state.document["Buy Books"]}`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Root>
  <RadixThemesDialog.Trigger>
  <RadixThemesButton color={`red`} type={`reset`}>
  {`Delete Request`}
</RadixThemesButton>
</RadixThemesDialog.Trigger>
  <RadixThemesDialog.Content size={`2`}>
  <RadixThemesDialog.Title>
  {`Are you sure you wish to delete?`}
</RadixThemesDialog.Title>
  <RadixThemesDialog.Close>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesButton color={`gray`}>
  {`Cancel`}
</RadixThemesButton>
  <RadixThemesButton color={`red`}>
  {`Delete`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesDialog.Close>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`Sort By:`}
</RadixThemesText>
  <RadixThemesSelect.Root onValueChange={(_e0) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_sort", {column:_e0})], (_e0), {})} value={reflex___state____state__app___components___data_table____table_state.sort_value}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  {reflex___state____state__app___components___data_table____table_state.column_headers.map((item, index_150381d92f8fe7a3) => (
  <RadixThemesSelect.Item key={index_150381d92f8fe7a3} value={item}>
  {item}
</RadixThemesSelect.Item>
))}
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <DebounceInput debounceTimeout={300} element={RadixThemesTextField.Root} onChange={(_e0) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_search", {text:_e0.target.value})], (_e0), {})} placeholder={`Search...`} value={reflex___state____state__app___components___data_table____table_state.search_value}/>
</RadixThemesFlex>
  <RadixThemesTable.Root css={{"width": "100%"}} variant={`surface`}>
  <RadixThemesTable.Header css={{"width": "100%"}}>
  <RadixThemesTable.Row>
  {reflex___state____state__app___components___data_table____table_state.column_headers.map((column, index_d9edfb4c366e192b) => (
  <RadixThemesTable.ColumnHeaderCell key={index_d9edfb4c366e192b} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_sort", {column:column})], (_e), {})}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {column}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.sort_value) === (column))) ? (
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.sort_direction) === ("asc"))) ? (
  <Fragment>
  <LucideArrowUpIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
)}
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownUpIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
))}
</RadixThemesTable.Row>
</RadixThemesTable.Header>
  <RadixThemesTable.Body css={{"width": "100%"}}>
  {reflex___state____state__app___components___data_table____table_state.current_data.map((doc, index_07b933202c915c5d) => (
  <RadixThemesTable.Row key={index_07b933202c915c5d} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.open_box", {new_collection:reflex___state____state__app___components___data_table____table_state.doc_type,new_doc:doc})], (_e), {})}>
  {Object.entries(doc).map((entry, index_c68b4c0e4a37a414) => (
  <RadixThemesTable.Cell key={index_c68b4c0e4a37a414}>
  {entry.at(1)}
</RadixThemesTable.Cell>
))}
</RadixThemesTable.Row>
))}
</RadixThemesTable.Body>
</RadixThemesTable.Root>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} justify={`center`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`} size={`2`}>
  {`${reflex___state____state__app___components___data_table____table_state.num_items} result(s)`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}} justify={`start`}/>
  <RadixThemesButton color={`gray`} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.handle_refresh", {})], (_e), {})} size={`2`} variant={`ghost`}>
  <LucideRotateCcwIcon css={{"color": "var(--current-color)"}} size={18}/>
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(((reflex___state____state__app___main____page_state.active_tab) === ("clients"))) ? (
  <Fragment>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`center`} gap={`3`}>
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.doc_type) === ("clients"))) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.open_box", {new_collection:reflex___state____state__app___components___data_table____table_state.doc_type,new_doc:{}})], (_e), {})}>
  <LucidePlusIcon css={{"color": "var(--current-color)"}}/>
  {`New ${reflex___state____state__app___components___data_table____table_state.doc_type}`}
</RadixThemesButton>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____viewing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`View ${reflex___state____state__app___components___lightbox____viewing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Location"}}>
  {reflex___state____state__app___components___forms____form_state.document["Location"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailer"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailer"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Subject"}}>
  {reflex___state____state__app___components___forms____form_state.document["Subject"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Details"}}>
  {reflex___state____state__app___components___forms____form_state.document["Details"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Priority"}}>
  {reflex___state____state__app___components___forms____form_state.document["Priority"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Assigned Team Member"}}>
  {reflex___state____state__app___components___forms____form_state.document["Assigned Team Member"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Instagram"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Description"}}>
  {reflex___state____state__app___components___forms____form_state.document["Description"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card Used"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retail Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Retail Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Tracking Number"}}>
  {reflex___state____state__app___components___forms____form_state.document["Tracking Number"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Purchased"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Purchased"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Received"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Received"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Product"}}>
  {reflex___state____state__app___components___forms____form_state.references["Product"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Selling Associate"}}>
  {reflex___state____state__app___components___forms____form_state.references["Selling Associate"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Request`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Request"}}>
  {`R-${reflex___state____state__app___components___forms____form_state.document["Request"]}`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Photos`}
</RadixThemesStrong>
  <RadixThemesPopover.Root>
  <RadixThemesPopover.Trigger>
  <RadixThemesFlex>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___form_fields____download_state.get_files", {key:`Photos`,files:reflex___state____state__app___components___forms____form_state.document["Photos"]})], (_e), {})} variant={`soft`}>
  {`Download Files`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesPopover.Trigger>
  <RadixThemesPopover.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  {reflex___state____state__app___components___form_fields____download_state.images.map((image, index_a368c70459e43df8) => (
  <RadixThemesButton css={{"width": "100%"}} key={index_a368c70459e43df8} onClick={(_e) => addEvents([Event("_download", {url:image,filename:``})], (_e), {})} variant={`ghost`}>
  <img css={{"height": "50px", "width": "50px"}} src={image}/>
</RadixThemesButton>
))}
</RadixThemesFlex>
</RadixThemesPopover.Content>
</RadixThemesPopover.Root>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brand"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brand"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shipping Address"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailers`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailers"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailers"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Purchased Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Purchased Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Purchased Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Shipment Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Deadline"}}>
  {reflex___state____state__app___components___forms____form_state.document["Deadline"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Paid For?"}}>
  {reflex___state____state__app___components___forms____form_state.document["Paid For?"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Client`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Client"}}>
  {reflex___state____state__app___components___forms____form_state.document["Client"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Item`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Item"}}>
  {reflex___state____state__app___components___forms____form_state.document["Item"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shopper"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shopper"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Buy Books`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Buy Books"}}>
  {reflex___state____state__app___components___forms____form_state.document["Buy Books"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Associates`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Associates"}}>
  {reflex___state____state__app___components___forms____form_state.references["Associates"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brands`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brands"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brands"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.handle_edit", {collection:reflex___state____state__app___components___lightbox____viewing_state.collection,doc:reflex___state____state__app___components___lightbox____viewing_state.doc})], (_e), {})}>
  {`Edit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____editing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixFormRoot className={`Root `} css={{"width": "100%"}} onSubmit={handleSubmit_09423c28d7d3048987b76882bb97b5b9}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`Edit ${reflex___state____state__app___components___lightbox____editing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Location"]} name={`Location`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Retailer"]} name={`Retailer`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Pongers`}>
  {`Pongers`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mane Stores`}>
  {`Mane Stores`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Heart Collections`}>
  {`Heart Collections`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Subject"]} name={`Subject`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Details"]} name={`Details`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Priority"]} name={`Priority`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`High`}>
  {`High`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Medium`}>
  {`Medium`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Low`}>
  {`Low`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`New`}>
  {`New`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Progress`}>
  {`In Progress`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Resolved`}>
  {`Resolved`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Assigned Team Member"]} name={`Assigned Team Member`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Instagram`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Description"]} name={`Description`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Price"]} name={`Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date"]} name={`Date`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]} name={`Credit Card Used`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Retail Price"]} name={`Retail Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Tracking Number"]} name={`Tracking Number`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Purchased"]} name={`Date Purchased`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Received"]} name={`Date Received`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Hunting`}>
  {`Hunting`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Located`}>
  {`Located`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Client`}>
  {`Ordered to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Office`}>
  {`Ordered to Office`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Inventory`}>
  {`In Inventory`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shipped from Office to Client`}>
  {`Shipped from Office to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Received by Client`}>
  {`Received by Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Returned`}>
  {`Returned`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Product"]} name={`Product`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton Ping Pong Set`}>
  {`Louis Vuitton Ping Pong Set`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci Flip Flops`}>
  {`Gucci Flip Flops`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Black Prada Bag`}>
  {`Black Prada Bag`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior Sauvage`}>
  {`Dior Sauvage`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Selling Associate"]} name={`Selling Associate`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Chester Lee`}>
  {`Chester Lee`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Cool Guy`}>
  {`Cool Guy`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Josh Heart`}>
  {`Josh Heart`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Brand"]} name={`Brand`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton`}>
  {`Louis Vuitton`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci`}>
  {`Gucci`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Prada`}>
  {`Prada`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Chanel`}>
  {`Chanel`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior`}>
  {`Dior`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Hermes`}>
  {`Hermes`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Shipping Address"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]} name={`Preferred Shipment Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Dropship`}>
  {`Dropship`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ship to Company`}>
  {`Ship to Company`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Deadline"]} name={`Deadline`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <Fragment>
  {isTrue(reflex___state____state__app___components___forms____form_state.document["Paid For?"]) ? (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={true} name={`Paid For?`}/>
</Fragment>
) : (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={false} name={`Paid For?`}/>
</Fragment>
)}
</Fragment>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Shopper"]} name={`Shopper`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Buy Books: ${reflex___state____state__app___components___forms____form_state.document["Buy Books"]}`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Root>
  <RadixThemesDialog.Trigger>
  <RadixThemesButton color={`red`} type={`reset`}>
  {`Delete Request`}
</RadixThemesButton>
</RadixThemesDialog.Trigger>
  <RadixThemesDialog.Content size={`2`}>
  <RadixThemesDialog.Title>
  {`Are you sure you wish to delete?`}
</RadixThemesDialog.Title>
  <RadixThemesDialog.Close>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesButton color={`gray`}>
  {`Cancel`}
</RadixThemesButton>
  <RadixThemesButton color={`red`}>
  {`Delete`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesDialog.Close>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`Sort By:`}
</RadixThemesText>
  <RadixThemesSelect.Root onValueChange={(_e0) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_sort", {column:_e0})], (_e0), {})} value={reflex___state____state__app___components___data_table____table_state.sort_value}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  {reflex___state____state__app___components___data_table____table_state.column_headers.map((item, index_150381d92f8fe7a3) => (
  <RadixThemesSelect.Item key={index_150381d92f8fe7a3} value={item}>
  {item}
</RadixThemesSelect.Item>
))}
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <DebounceInput debounceTimeout={300} element={RadixThemesTextField.Root} onChange={(_e0) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_search", {text:_e0.target.value})], (_e0), {})} placeholder={`Search...`} value={reflex___state____state__app___components___data_table____table_state.search_value}/>
</RadixThemesFlex>
  <RadixThemesTable.Root css={{"width": "100%"}} variant={`surface`}>
  <RadixThemesTable.Header css={{"width": "100%"}}>
  <RadixThemesTable.Row>
  {reflex___state____state__app___components___data_table____table_state.column_headers.map((column, index_d9edfb4c366e192b) => (
  <RadixThemesTable.ColumnHeaderCell key={index_d9edfb4c366e192b} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_sort", {column:column})], (_e), {})}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {column}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.sort_value) === (column))) ? (
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.sort_direction) === ("asc"))) ? (
  <Fragment>
  <LucideArrowUpIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
)}
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownUpIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
))}
</RadixThemesTable.Row>
</RadixThemesTable.Header>
  <RadixThemesTable.Body css={{"width": "100%"}}>
  {reflex___state____state__app___components___data_table____table_state.current_data.map((doc, index_07b933202c915c5d) => (
  <RadixThemesTable.Row key={index_07b933202c915c5d} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.open_box", {new_collection:reflex___state____state__app___components___data_table____table_state.doc_type,new_doc:doc})], (_e), {})}>
  {Object.entries(doc).map((entry, index_c68b4c0e4a37a414) => (
  <RadixThemesTable.Cell key={index_c68b4c0e4a37a414}>
  {entry.at(1)}
</RadixThemesTable.Cell>
))}
</RadixThemesTable.Row>
))}
</RadixThemesTable.Body>
</RadixThemesTable.Root>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} justify={`center`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`} size={`2`}>
  {`${reflex___state____state__app___components___data_table____table_state.num_items} result(s)`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}} justify={`start`}/>
  <RadixThemesButton color={`gray`} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.handle_refresh", {})], (_e), {})} size={`2`} variant={`ghost`}>
  <LucideRotateCcwIcon css={{"color": "var(--current-color)"}} size={18}/>
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(((reflex___state____state__app___main____page_state.active_tab) === ("brands"))) ? (
  <Fragment>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`center`} gap={`3`}>
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.doc_type) === ("brands"))) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.open_box", {new_collection:reflex___state____state__app___components___data_table____table_state.doc_type,new_doc:{}})], (_e), {})}>
  <LucidePlusIcon css={{"color": "var(--current-color)"}}/>
  {`New ${reflex___state____state__app___components___data_table____table_state.doc_type}`}
</RadixThemesButton>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____viewing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`View ${reflex___state____state__app___components___lightbox____viewing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Location"}}>
  {reflex___state____state__app___components___forms____form_state.document["Location"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailer"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailer"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Subject"}}>
  {reflex___state____state__app___components___forms____form_state.document["Subject"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Details"}}>
  {reflex___state____state__app___components___forms____form_state.document["Details"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Priority"}}>
  {reflex___state____state__app___components___forms____form_state.document["Priority"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Assigned Team Member"}}>
  {reflex___state____state__app___components___forms____form_state.document["Assigned Team Member"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Instagram"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Description"}}>
  {reflex___state____state__app___components___forms____form_state.document["Description"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card Used"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retail Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Retail Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Tracking Number"}}>
  {reflex___state____state__app___components___forms____form_state.document["Tracking Number"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Purchased"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Purchased"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Received"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Received"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Product"}}>
  {reflex___state____state__app___components___forms____form_state.references["Product"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Selling Associate"}}>
  {reflex___state____state__app___components___forms____form_state.references["Selling Associate"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Request`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Request"}}>
  {`R-${reflex___state____state__app___components___forms____form_state.document["Request"]}`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Photos`}
</RadixThemesStrong>
  <RadixThemesPopover.Root>
  <RadixThemesPopover.Trigger>
  <RadixThemesFlex>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___form_fields____download_state.get_files", {key:`Photos`,files:reflex___state____state__app___components___forms____form_state.document["Photos"]})], (_e), {})} variant={`soft`}>
  {`Download Files`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesPopover.Trigger>
  <RadixThemesPopover.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  {reflex___state____state__app___components___form_fields____download_state.images.map((image, index_a368c70459e43df8) => (
  <RadixThemesButton css={{"width": "100%"}} key={index_a368c70459e43df8} onClick={(_e) => addEvents([Event("_download", {url:image,filename:``})], (_e), {})} variant={`ghost`}>
  <img css={{"height": "50px", "width": "50px"}} src={image}/>
</RadixThemesButton>
))}
</RadixThemesFlex>
</RadixThemesPopover.Content>
</RadixThemesPopover.Root>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brand"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brand"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shipping Address"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailers`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailers"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailers"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Purchased Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Purchased Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Purchased Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Shipment Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Deadline"}}>
  {reflex___state____state__app___components___forms____form_state.document["Deadline"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Paid For?"}}>
  {reflex___state____state__app___components___forms____form_state.document["Paid For?"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Client`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Client"}}>
  {reflex___state____state__app___components___forms____form_state.document["Client"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Item`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Item"}}>
  {reflex___state____state__app___components___forms____form_state.document["Item"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shopper"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shopper"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Buy Books`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Buy Books"}}>
  {reflex___state____state__app___components___forms____form_state.document["Buy Books"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Associates`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Associates"}}>
  {reflex___state____state__app___components___forms____form_state.references["Associates"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brands`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brands"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brands"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.handle_edit", {collection:reflex___state____state__app___components___lightbox____viewing_state.collection,doc:reflex___state____state__app___components___lightbox____viewing_state.doc})], (_e), {})}>
  {`Edit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____editing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixFormRoot className={`Root `} css={{"width": "100%"}} onSubmit={handleSubmit_09423c28d7d3048987b76882bb97b5b9}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`Edit ${reflex___state____state__app___components___lightbox____editing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Location"]} name={`Location`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Retailer"]} name={`Retailer`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Pongers`}>
  {`Pongers`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mane Stores`}>
  {`Mane Stores`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Heart Collections`}>
  {`Heart Collections`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Subject"]} name={`Subject`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Details"]} name={`Details`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Priority"]} name={`Priority`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`High`}>
  {`High`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Medium`}>
  {`Medium`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Low`}>
  {`Low`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`New`}>
  {`New`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Progress`}>
  {`In Progress`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Resolved`}>
  {`Resolved`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Assigned Team Member"]} name={`Assigned Team Member`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Instagram`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Description"]} name={`Description`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Price"]} name={`Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date"]} name={`Date`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]} name={`Credit Card Used`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Retail Price"]} name={`Retail Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Tracking Number"]} name={`Tracking Number`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Purchased"]} name={`Date Purchased`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Received"]} name={`Date Received`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Hunting`}>
  {`Hunting`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Located`}>
  {`Located`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Client`}>
  {`Ordered to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Office`}>
  {`Ordered to Office`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Inventory`}>
  {`In Inventory`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shipped from Office to Client`}>
  {`Shipped from Office to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Received by Client`}>
  {`Received by Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Returned`}>
  {`Returned`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Product"]} name={`Product`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton Ping Pong Set`}>
  {`Louis Vuitton Ping Pong Set`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci Flip Flops`}>
  {`Gucci Flip Flops`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Black Prada Bag`}>
  {`Black Prada Bag`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior Sauvage`}>
  {`Dior Sauvage`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Selling Associate"]} name={`Selling Associate`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Chester Lee`}>
  {`Chester Lee`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Cool Guy`}>
  {`Cool Guy`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Josh Heart`}>
  {`Josh Heart`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Brand"]} name={`Brand`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton`}>
  {`Louis Vuitton`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci`}>
  {`Gucci`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Prada`}>
  {`Prada`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Chanel`}>
  {`Chanel`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior`}>
  {`Dior`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Hermes`}>
  {`Hermes`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Shipping Address"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]} name={`Preferred Shipment Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Dropship`}>
  {`Dropship`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ship to Company`}>
  {`Ship to Company`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Deadline"]} name={`Deadline`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <Fragment>
  {isTrue(reflex___state____state__app___components___forms____form_state.document["Paid For?"]) ? (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={true} name={`Paid For?`}/>
</Fragment>
) : (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={false} name={`Paid For?`}/>
</Fragment>
)}
</Fragment>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Shopper"]} name={`Shopper`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Buy Books: ${reflex___state____state__app___components___forms____form_state.document["Buy Books"]}`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Root>
  <RadixThemesDialog.Trigger>
  <RadixThemesButton color={`red`} type={`reset`}>
  {`Delete Request`}
</RadixThemesButton>
</RadixThemesDialog.Trigger>
  <RadixThemesDialog.Content size={`2`}>
  <RadixThemesDialog.Title>
  {`Are you sure you wish to delete?`}
</RadixThemesDialog.Title>
  <RadixThemesDialog.Close>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesButton color={`gray`}>
  {`Cancel`}
</RadixThemesButton>
  <RadixThemesButton color={`red`}>
  {`Delete`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesDialog.Close>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`Sort By:`}
</RadixThemesText>
  <RadixThemesSelect.Root onValueChange={(_e0) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_sort", {column:_e0})], (_e0), {})} value={reflex___state____state__app___components___data_table____table_state.sort_value}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  {reflex___state____state__app___components___data_table____table_state.column_headers.map((item, index_150381d92f8fe7a3) => (
  <RadixThemesSelect.Item key={index_150381d92f8fe7a3} value={item}>
  {item}
</RadixThemesSelect.Item>
))}
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <DebounceInput debounceTimeout={300} element={RadixThemesTextField.Root} onChange={(_e0) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_search", {text:_e0.target.value})], (_e0), {})} placeholder={`Search...`} value={reflex___state____state__app___components___data_table____table_state.search_value}/>
</RadixThemesFlex>
  <RadixThemesTable.Root css={{"width": "100%"}} variant={`surface`}>
  <RadixThemesTable.Header css={{"width": "100%"}}>
  <RadixThemesTable.Row>
  {reflex___state____state__app___components___data_table____table_state.column_headers.map((column, index_d9edfb4c366e192b) => (
  <RadixThemesTable.ColumnHeaderCell key={index_d9edfb4c366e192b} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_sort", {column:column})], (_e), {})}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {column}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.sort_value) === (column))) ? (
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.sort_direction) === ("asc"))) ? (
  <Fragment>
  <LucideArrowUpIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
)}
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownUpIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
))}
</RadixThemesTable.Row>
</RadixThemesTable.Header>
  <RadixThemesTable.Body css={{"width": "100%"}}>
  {reflex___state____state__app___components___data_table____table_state.current_data.map((doc, index_07b933202c915c5d) => (
  <RadixThemesTable.Row key={index_07b933202c915c5d} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.open_box", {new_collection:reflex___state____state__app___components___data_table____table_state.doc_type,new_doc:doc})], (_e), {})}>
  {Object.entries(doc).map((entry, index_c68b4c0e4a37a414) => (
  <RadixThemesTable.Cell key={index_c68b4c0e4a37a414}>
  {entry.at(1)}
</RadixThemesTable.Cell>
))}
</RadixThemesTable.Row>
))}
</RadixThemesTable.Body>
</RadixThemesTable.Root>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} justify={`center`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`} size={`2`}>
  {`${reflex___state____state__app___components___data_table____table_state.num_items} result(s)`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}} justify={`start`}/>
  <RadixThemesButton color={`gray`} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.handle_refresh", {})], (_e), {})} size={`2`} variant={`ghost`}>
  <LucideRotateCcwIcon css={{"color": "var(--current-color)"}} size={18}/>
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(((reflex___state____state__app___main____page_state.active_tab) === ("items"))) ? (
  <Fragment>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`center`} gap={`3`}>
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.doc_type) === ("items"))) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.open_box", {new_collection:reflex___state____state__app___components___data_table____table_state.doc_type,new_doc:{}})], (_e), {})}>
  <LucidePlusIcon css={{"color": "var(--current-color)"}}/>
  {`New ${reflex___state____state__app___components___data_table____table_state.doc_type}`}
</RadixThemesButton>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____viewing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`View ${reflex___state____state__app___components___lightbox____viewing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Location"}}>
  {reflex___state____state__app___components___forms____form_state.document["Location"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailer"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailer"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Subject"}}>
  {reflex___state____state__app___components___forms____form_state.document["Subject"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Details"}}>
  {reflex___state____state__app___components___forms____form_state.document["Details"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Priority"}}>
  {reflex___state____state__app___components___forms____form_state.document["Priority"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Assigned Team Member"}}>
  {reflex___state____state__app___components___forms____form_state.document["Assigned Team Member"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Instagram"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Description"}}>
  {reflex___state____state__app___components___forms____form_state.document["Description"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card Used"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retail Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Retail Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Tracking Number"}}>
  {reflex___state____state__app___components___forms____form_state.document["Tracking Number"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Purchased"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Purchased"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Received"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Received"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Product"}}>
  {reflex___state____state__app___components___forms____form_state.references["Product"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Selling Associate"}}>
  {reflex___state____state__app___components___forms____form_state.references["Selling Associate"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Request`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Request"}}>
  {`R-${reflex___state____state__app___components___forms____form_state.document["Request"]}`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Photos`}
</RadixThemesStrong>
  <RadixThemesPopover.Root>
  <RadixThemesPopover.Trigger>
  <RadixThemesFlex>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___form_fields____download_state.get_files", {key:`Photos`,files:reflex___state____state__app___components___forms____form_state.document["Photos"]})], (_e), {})} variant={`soft`}>
  {`Download Files`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesPopover.Trigger>
  <RadixThemesPopover.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  {reflex___state____state__app___components___form_fields____download_state.images.map((image, index_a368c70459e43df8) => (
  <RadixThemesButton css={{"width": "100%"}} key={index_a368c70459e43df8} onClick={(_e) => addEvents([Event("_download", {url:image,filename:``})], (_e), {})} variant={`ghost`}>
  <img css={{"height": "50px", "width": "50px"}} src={image}/>
</RadixThemesButton>
))}
</RadixThemesFlex>
</RadixThemesPopover.Content>
</RadixThemesPopover.Root>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brand"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brand"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shipping Address"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailers`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailers"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailers"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Purchased Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Purchased Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Purchased Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Shipment Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Deadline"}}>
  {reflex___state____state__app___components___forms____form_state.document["Deadline"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Paid For?"}}>
  {reflex___state____state__app___components___forms____form_state.document["Paid For?"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Client`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Client"}}>
  {reflex___state____state__app___components___forms____form_state.document["Client"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Item`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Item"}}>
  {reflex___state____state__app___components___forms____form_state.document["Item"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shopper"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shopper"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Buy Books`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Buy Books"}}>
  {reflex___state____state__app___components___forms____form_state.document["Buy Books"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Associates`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Associates"}}>
  {reflex___state____state__app___components___forms____form_state.references["Associates"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brands`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brands"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brands"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.handle_edit", {collection:reflex___state____state__app___components___lightbox____viewing_state.collection,doc:reflex___state____state__app___components___lightbox____viewing_state.doc})], (_e), {})}>
  {`Edit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____editing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixFormRoot className={`Root `} css={{"width": "100%"}} onSubmit={handleSubmit_09423c28d7d3048987b76882bb97b5b9}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`Edit ${reflex___state____state__app___components___lightbox____editing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Location"]} name={`Location`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Retailer"]} name={`Retailer`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Pongers`}>
  {`Pongers`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mane Stores`}>
  {`Mane Stores`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Heart Collections`}>
  {`Heart Collections`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Subject"]} name={`Subject`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Details"]} name={`Details`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Priority"]} name={`Priority`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`High`}>
  {`High`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Medium`}>
  {`Medium`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Low`}>
  {`Low`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`New`}>
  {`New`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Progress`}>
  {`In Progress`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Resolved`}>
  {`Resolved`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Assigned Team Member"]} name={`Assigned Team Member`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Instagram`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Description"]} name={`Description`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Price"]} name={`Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date"]} name={`Date`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]} name={`Credit Card Used`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Retail Price"]} name={`Retail Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Tracking Number"]} name={`Tracking Number`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Purchased"]} name={`Date Purchased`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Received"]} name={`Date Received`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Hunting`}>
  {`Hunting`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Located`}>
  {`Located`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Client`}>
  {`Ordered to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Office`}>
  {`Ordered to Office`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Inventory`}>
  {`In Inventory`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shipped from Office to Client`}>
  {`Shipped from Office to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Received by Client`}>
  {`Received by Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Returned`}>
  {`Returned`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Product"]} name={`Product`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton Ping Pong Set`}>
  {`Louis Vuitton Ping Pong Set`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci Flip Flops`}>
  {`Gucci Flip Flops`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Black Prada Bag`}>
  {`Black Prada Bag`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior Sauvage`}>
  {`Dior Sauvage`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Selling Associate"]} name={`Selling Associate`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Chester Lee`}>
  {`Chester Lee`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Cool Guy`}>
  {`Cool Guy`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Josh Heart`}>
  {`Josh Heart`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Brand"]} name={`Brand`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton`}>
  {`Louis Vuitton`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci`}>
  {`Gucci`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Prada`}>
  {`Prada`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Chanel`}>
  {`Chanel`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior`}>
  {`Dior`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Hermes`}>
  {`Hermes`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Shipping Address"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]} name={`Preferred Shipment Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Dropship`}>
  {`Dropship`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ship to Company`}>
  {`Ship to Company`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Deadline"]} name={`Deadline`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <Fragment>
  {isTrue(reflex___state____state__app___components___forms____form_state.document["Paid For?"]) ? (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={true} name={`Paid For?`}/>
</Fragment>
) : (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={false} name={`Paid For?`}/>
</Fragment>
)}
</Fragment>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Shopper"]} name={`Shopper`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Buy Books: ${reflex___state____state__app___components___forms____form_state.document["Buy Books"]}`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Root>
  <RadixThemesDialog.Trigger>
  <RadixThemesButton color={`red`} type={`reset`}>
  {`Delete Request`}
</RadixThemesButton>
</RadixThemesDialog.Trigger>
  <RadixThemesDialog.Content size={`2`}>
  <RadixThemesDialog.Title>
  {`Are you sure you wish to delete?`}
</RadixThemesDialog.Title>
  <RadixThemesDialog.Close>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesButton color={`gray`}>
  {`Cancel`}
</RadixThemesButton>
  <RadixThemesButton color={`red`}>
  {`Delete`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesDialog.Close>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`Sort By:`}
</RadixThemesText>
  <RadixThemesSelect.Root onValueChange={(_e0) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_sort", {column:_e0})], (_e0), {})} value={reflex___state____state__app___components___data_table____table_state.sort_value}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  {reflex___state____state__app___components___data_table____table_state.column_headers.map((item, index_150381d92f8fe7a3) => (
  <RadixThemesSelect.Item key={index_150381d92f8fe7a3} value={item}>
  {item}
</RadixThemesSelect.Item>
))}
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <DebounceInput debounceTimeout={300} element={RadixThemesTextField.Root} onChange={(_e0) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_search", {text:_e0.target.value})], (_e0), {})} placeholder={`Search...`} value={reflex___state____state__app___components___data_table____table_state.search_value}/>
</RadixThemesFlex>
  <RadixThemesTable.Root css={{"width": "100%"}} variant={`surface`}>
  <RadixThemesTable.Header css={{"width": "100%"}}>
  <RadixThemesTable.Row>
  {reflex___state____state__app___components___data_table____table_state.column_headers.map((column, index_d9edfb4c366e192b) => (
  <RadixThemesTable.ColumnHeaderCell key={index_d9edfb4c366e192b} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_sort", {column:column})], (_e), {})}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {column}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.sort_value) === (column))) ? (
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.sort_direction) === ("asc"))) ? (
  <Fragment>
  <LucideArrowUpIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
)}
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownUpIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
))}
</RadixThemesTable.Row>
</RadixThemesTable.Header>
  <RadixThemesTable.Body css={{"width": "100%"}}>
  {reflex___state____state__app___components___data_table____table_state.current_data.map((doc, index_07b933202c915c5d) => (
  <RadixThemesTable.Row key={index_07b933202c915c5d} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.open_box", {new_collection:reflex___state____state__app___components___data_table____table_state.doc_type,new_doc:doc})], (_e), {})}>
  {Object.entries(doc).map((entry, index_c68b4c0e4a37a414) => (
  <RadixThemesTable.Cell key={index_c68b4c0e4a37a414}>
  {entry.at(1)}
</RadixThemesTable.Cell>
))}
</RadixThemesTable.Row>
))}
</RadixThemesTable.Body>
</RadixThemesTable.Root>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} justify={`center`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`} size={`2`}>
  {`${reflex___state____state__app___components___data_table____table_state.num_items} result(s)`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}} justify={`start`}/>
  <RadixThemesButton color={`gray`} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.handle_refresh", {})], (_e), {})} size={`2`} variant={`ghost`}>
  <LucideRotateCcwIcon css={{"color": "var(--current-color)"}} size={18}/>
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(((reflex___state____state__app___main____page_state.active_tab) === ("profiles"))) ? (
  <Fragment>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`center`} gap={`3`}>
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.doc_type) === ("profiles"))) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.open_box", {new_collection:reflex___state____state__app___components___data_table____table_state.doc_type,new_doc:{}})], (_e), {})}>
  <LucidePlusIcon css={{"color": "var(--current-color)"}}/>
  {`New ${reflex___state____state__app___components___data_table____table_state.doc_type}`}
</RadixThemesButton>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____viewing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`View ${reflex___state____state__app___components___lightbox____viewing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Location"}}>
  {reflex___state____state__app___components___forms____form_state.document["Location"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailer"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailer"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Subject"}}>
  {reflex___state____state__app___components___forms____form_state.document["Subject"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Details"}}>
  {reflex___state____state__app___components___forms____form_state.document["Details"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Priority"}}>
  {reflex___state____state__app___components___forms____form_state.document["Priority"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Assigned Team Member"}}>
  {reflex___state____state__app___components___forms____form_state.document["Assigned Team Member"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Instagram"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Instagram"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Description"}}>
  {reflex___state____state__app___components___forms____form_state.document["Description"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card Used"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retail Price"}}>
  {reflex___state____state__app___components___forms____form_state.document["Retail Price"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Tracking Number"}}>
  {reflex___state____state__app___components___forms____form_state.document["Tracking Number"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Purchased"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Purchased"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Date Received"}}>
  {reflex___state____state__app___components___forms____form_state.document["Date Received"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Profile"}}>
  {reflex___state____state__app___components___forms____form_state.references["Profile"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Product"}}>
  {reflex___state____state__app___components___forms____form_state.references["Product"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Selling Associate"}}>
  {reflex___state____state__app___components___forms____form_state.references["Selling Associate"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Request`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Request"}}>
  {`R-${reflex___state____state__app___components___forms____form_state.document["Request"]}`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Photos`}
</RadixThemesStrong>
  <RadixThemesPopover.Root>
  <RadixThemesPopover.Trigger>
  <RadixThemesFlex>
  <RadixThemesButton onClick={(_e) => addEvents([Event("reflex___state____state.app___components___form_fields____download_state.get_files", {key:`Photos`,files:reflex___state____state__app___components___forms____form_state.document["Photos"]})], (_e), {})} variant={`soft`}>
  {`Download Files`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesPopover.Trigger>
  <RadixThemesPopover.Content>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  {reflex___state____state__app___components___form_fields____download_state.images.map((image, index_a368c70459e43df8) => (
  <RadixThemesButton css={{"width": "100%"}} key={index_a368c70459e43df8} onClick={(_e) => addEvents([Event("_download", {url:image,filename:``})], (_e), {})} variant={`ghost`}>
  <img css={{"height": "50px", "width": "50px"}} src={image}/>
</RadixThemesButton>
))}
</RadixThemesFlex>
</RadixThemesPopover.Content>
</RadixThemesPopover.Root>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brand"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brand"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Credit Card #"}}>
  {reflex___state____state__app___components___forms____form_state.document["Credit Card #"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shipping Address"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shipping Address"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Expiration"}}>
  {reflex___state____state__app___components___forms____form_state.document["Expiration"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Phone"}}>
  {reflex___state____state__app___components___forms____form_state.document["Phone"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "CVV"}}>
  {reflex___state____state__app___components___forms____form_state.document["CVV"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Email"}}>
  {reflex___state____state__app___components___forms____form_state.document["Email"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Contact Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Status"}}>
  {reflex___state____state__app___components___forms____form_state.document["Status"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailers`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Retailers"}}>
  {reflex___state____state__app___components___forms____form_state.references["Retailers"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Purchased Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Purchased Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Purchased Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Preferred Shipment Method"}}>
  {reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Deadline"}}>
  {reflex___state____state__app___components___forms____form_state.document["Deadline"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Paid For?"}}>
  {reflex___state____state__app___components___forms____form_state.document["Paid For?"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Client`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Client"}}>
  {reflex___state____state__app___components___forms____form_state.document["Client"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Item`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Item"}}>
  {reflex___state____state__app___components___forms____form_state.document["Item"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Shopper"}}>
  {reflex___state____state__app___components___forms____form_state.document["Shopper"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Name"}}>
  {reflex___state____state__app___components___forms____form_state.document["Name"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Buy Books`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Buy Books"}}>
  {reflex___state____state__app___components___forms____form_state.document["Buy Books"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Associates`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Associates"}}>
  {reflex___state____state__app___components___forms____form_state.references["Associates"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brands`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Brands"}}>
  {reflex___state____state__app___components___forms____form_state.references["Brands"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Items`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Items"}}>
  {reflex___state____state__app___components___forms____form_state.formatted_lists["Items"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Upload Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Upload Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Upload Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Last Edit Date`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Last Edit Date"}}>
  {reflex___state____state__app___components___forms____form_state.document["Last Edit Date"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Created By`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Created By"}}>
  {reflex___state____state__app___components___forms____form_state.document["Created By"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.handle_edit", {collection:reflex___state____state__app___components___lightbox____viewing_state.collection,doc:reflex___state____state__app___components___lightbox____viewing_state.doc})], (_e), {})}>
  {`Edit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesDialog.Root open={reflex___state____state__app___components___lightbox____editing_state.is_box_open}>
  <RadixThemesDialog.Content>
  <RadixFormRoot className={`Root `} css={{"width": "100%"}} onSubmit={handleSubmit_09423c28d7d3048987b76882bb97b5b9}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} justify={`end`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Title css={{"margin": 0}}>
  {`Edit ${reflex___state____state__app___components___lightbox____editing_state.collection}`}
</RadixThemesDialog.Title>
  <RadixThemesButton color={`gray`} css={{"position": "absolute", "top": "10px", "right": "10px"}} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____editing_state.close_box", {})], (_e), {})} size={`2`} type={`reset`} variant={`ghost`}>
  <LucideXIcon css={{"color": "var(--current-color)"}} size={25}/>
</RadixThemesButton>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__app___components___forms____form_state.data_type)) {
                case JSON.stringify(`associates`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Location`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Location"]} name={`Location`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retailer`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Retailer"]} name={`Retailer`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Pongers`}>
  {`Pongers`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mane Stores`}>
  {`Mane Stores`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Heart Collections`}>
  {`Heart Collections`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`brands`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`complaints`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Subject`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Subject"]} name={`Subject`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Details`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Details"]} name={`Details`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Priority`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Priority"]} name={`Priority`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`High`}>
  {`High`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Medium`}>
  {`Medium`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Low`}>
  {`Low`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`New`}>
  {`New`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Progress`}>
  {`In Progress`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Resolved`}>
  {`Resolved`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Assigned Team Member`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Assigned Team Member"]} name={`Assigned Team Member`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`clients`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Instagram`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Instagram`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Instagram"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`expenses`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Description`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Description"]} name={`Description`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Price"]} name={`Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date"]} name={`Date`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card Used`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card Used"]} name={`Credit Card Used`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`items`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Retail Price`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Retail Price"]} name={`Retail Price`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Tracking Number`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Tracking Number"]} name={`Tracking Number`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Purchased`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Purchased"]} name={`Date Purchased`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Date Received`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Date Received"]} name={`Date Received`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Hunting`}>
  {`Hunting`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Located`}>
  {`Located`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Client`}>
  {`Ordered to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ordered to Office`}>
  {`Ordered to Office`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`In Inventory`}>
  {`In Inventory`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shipped from Office to Client`}>
  {`Shipped from Office to Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Received by Client`}>
  {`Received by Client`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Returned`}>
  {`Returned`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Specs`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Specs"}}>
  {reflex___state____state__app___components___forms____form_state.document["Specs"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Profile`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Profile"]} name={`Profile`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Ryder McIntosh`}>
  {`Ryder McIntosh`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Eric Shoppington`}>
  {`Eric Shoppington`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Shmulio Jones`}>
  {`Shmulio Jones`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Product`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Product"]} name={`Product`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton Ping Pong Set`}>
  {`Louis Vuitton Ping Pong Set`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci Flip Flops`}>
  {`Gucci Flip Flops`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Black Prada Bag`}>
  {`Black Prada Bag`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior Sauvage`}>
  {`Dior Sauvage`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Selling Associate`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Selling Associate"]} name={`Selling Associate`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Chester Lee`}>
  {`Chester Lee`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Cool Guy`}>
  {`Cool Guy`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Josh Heart`}>
  {`Josh Heart`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`products`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={true} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Brand`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Brand"]} name={`Brand`} required={true} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Louis Vuitton`}>
  {`Louis Vuitton`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Gucci`}>
  {`Gucci`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Prada`}>
  {`Prada`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Chanel`}>
  {`Chanel`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Dior`}>
  {`Dior`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Hermes`}>
  {`Hermes`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`profiles`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Credit Card #`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Credit Card #"]} name={`Credit Card #`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shipping Address`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Shipping Address"]} name={`Shipping Address`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Expiration`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Expiration"]} name={`Expiration`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Phone`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Phone"]} name={`Phone`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`CVV`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["CVV"]} name={`CVV`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Email`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Email"]} name={`Email`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Contact Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Contact Method"]} name={`Preferred Contact Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Phone`}>
  {`Phone`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Email`}>
  {`Email`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Status`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Status"]} name={`Status`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Sizes`}
</RadixThemesStrong>
  <RadixThemesText as={`p`} css={{"name": "Sizes"}}>
  {reflex___state____state__app___components___forms____form_state.document["Sizes"]}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`requests`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Preferred Shipment Method`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Preferred Shipment Method"]} name={`Preferred Shipment Method`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Dropship`}>
  {`Dropship`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Ship to Company`}>
  {`Ship to Company`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Deadline`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Deadline"]} name={`Deadline`} type={`date`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesStrong>
  {`Paid For?`}
</RadixThemesStrong>
  <Fragment>
  {isTrue(reflex___state____state__app___components___forms____form_state.document["Paid For?"]) ? (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={true} name={`Paid For?`}/>
</Fragment>
) : (
  <Fragment>
  <RadixThemesSwitch css={{"type": "switch"}} defaultChecked={false} name={`Paid For?`}/>
</Fragment>
)}
</Fragment>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Shopper`}
</RadixThemesStrong>
  <RadixThemesSelect.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.references["Shopper"]} name={`Shopper`} required={false} size={`3`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
                case JSON.stringify(`retailers`):
                return <RadixThemesGrid align={`center`} columns={`2`} css={{"width": "100%"}} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`1`}>
  <RadixThemesStrong>
  {`Name`}
</RadixThemesStrong>
  <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__app___components___forms____form_state.document["Name"]} name={`Name`} required={false} size={`3`}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Buy Books: ${reflex___state____state__app___components___forms____form_state.document["Buy Books"]}`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesGrid>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "top": "1em"}} direction={`row`} gap={`3`}>
  <RadixThemesDialog.Root>
  <RadixThemesDialog.Trigger>
  <RadixThemesButton color={`red`} type={`reset`}>
  {`Delete Request`}
</RadixThemesButton>
</RadixThemesDialog.Trigger>
  <RadixThemesDialog.Content size={`2`}>
  <RadixThemesDialog.Title>
  {`Are you sure you wish to delete?`}
</RadixThemesDialog.Title>
  <RadixThemesDialog.Close>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesButton color={`gray`}>
  {`Cancel`}
</RadixThemesButton>
  <RadixThemesButton color={`red`}>
  {`Delete`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesDialog.Close>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesButton color={`blue`} css={{"right": "1em"}} type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`Sort By:`}
</RadixThemesText>
  <RadixThemesSelect.Root onValueChange={(_e0) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_sort", {column:_e0})], (_e0), {})} value={reflex___state____state__app___components___data_table____table_state.sort_value}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  {reflex___state____state__app___components___data_table____table_state.column_headers.map((item, index_150381d92f8fe7a3) => (
  <RadixThemesSelect.Item key={index_150381d92f8fe7a3} value={item}>
  {item}
</RadixThemesSelect.Item>
))}
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <DebounceInput debounceTimeout={300} element={RadixThemesTextField.Root} onChange={(_e0) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_search", {text:_e0.target.value})], (_e0), {})} placeholder={`Search...`} value={reflex___state____state__app___components___data_table____table_state.search_value}/>
</RadixThemesFlex>
  <RadixThemesTable.Root css={{"width": "100%"}} variant={`surface`}>
  <RadixThemesTable.Header css={{"width": "100%"}}>
  <RadixThemesTable.Row>
  {reflex___state____state__app___components___data_table____table_state.column_headers.map((column, index_d9edfb4c366e192b) => (
  <RadixThemesTable.ColumnHeaderCell key={index_d9edfb4c366e192b} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.set_sort", {column:column})], (_e), {})}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {column}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.sort_value) === (column))) ? (
  <Fragment>
  {isTrue(((reflex___state____state__app___components___data_table____table_state.sort_direction) === ("asc"))) ? (
  <Fragment>
  <LucideArrowUpIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
)}
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownUpIcon css={{"color": "var(--current-color)"}} size={20}/>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
))}
</RadixThemesTable.Row>
</RadixThemesTable.Header>
  <RadixThemesTable.Body css={{"width": "100%"}}>
  {reflex___state____state__app___components___data_table____table_state.current_data.map((doc, index_07b933202c915c5d) => (
  <RadixThemesTable.Row key={index_07b933202c915c5d} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___lightbox____viewing_state.open_box", {new_collection:reflex___state____state__app___components___data_table____table_state.doc_type,new_doc:doc})], (_e), {})}>
  {Object.entries(doc).map((entry, index_c68b4c0e4a37a414) => (
  <RadixThemesTable.Cell key={index_c68b4c0e4a37a414}>
  {entry.at(1)}
</RadixThemesTable.Cell>
))}
</RadixThemesTable.Row>
))}
</RadixThemesTable.Body>
</RadixThemesTable.Root>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} justify={`center`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`} size={`2`}>
  {`${reflex___state____state__app___components___data_table____table_state.num_items} result(s)`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}} justify={`start`}/>
  <RadixThemesButton color={`gray`} onClick={(_e) => addEvents([Event("reflex___state____state.app___components___data_table____table_state.handle_refresh", {})], (_e), {})} size={`2`} variant={`ghost`}>
  <LucideRotateCcwIcon css={{"color": "var(--current-color)"}} size={18}/>
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(((reflex___state____state__app___main____page_state.active_tab) === ("office_expenses"))) ? (
  <Fragment>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`8`}>
  {`Office Expenses`}
</RadixThemesHeading>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesCard css={{"width": "40%"}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`4`}>
  {`Description`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`This page will work like an accounting book for any office expenses. Purchases can be logged here to keep track of things bought by them team for the office or even recurring expenses such as rent.`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesCard>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`4`}>
  {`Rank`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`5/10`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesCard>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`4`}>
  {`Priority`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`Low`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(((reflex___state____state__app___main____page_state.active_tab) === ("admin"))) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesHeading size={`9`}>
  {`Admin Panel`}
</RadixThemesHeading>
  <RadixThemesHeading size={`6`}>
  {`Edit User Role`}
</RadixThemesHeading>
  <RadixFormRoot className={`Root `} css={{"width": "100%"}} onSubmit={handleSubmit_6093a679cd15df9b43281c78b0d21d57}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesSelect.Root name={`user`} size={`3`}>
  <RadixThemesSelect.Trigger placeholder={`Select a user`}/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesSelect.Root name={`new_role`} size={`3`}>
  <RadixThemesSelect.Trigger placeholder={`Select role`}/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`admin`}>
  {`admin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`manager`}>
  {`manager`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`scrub`}>
  {`scrub`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesButton size={`3`} type={`submit`}>
  {`Set Role`}
</RadixThemesButton>
  <Fragment>
  {isTrue(reflex___state____state__app___pages___office___admin____admin_state.role_edit_success) ? (
  <Fragment>
  <RadixThemesCallout.Root color={`green`} css={{"icon": "check"}} size={`1`}>
  <RadixThemesCallout.Icon>
  <LucideCheckIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesCallout.Icon>
  <RadixThemesCallout.Text>
  {`Success`}
</RadixThemesCallout.Text>
</RadixThemesCallout.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixFormRoot>
  <RadixThemesHeading size={`6`}>
  {`Edit Salary/Comission Notes`}
</RadixThemesHeading>
  <RadixFormRoot className={`Root `} css={{"width": "100%"}} onSubmit={handleSubmit_0aa0b605993be3aafbd96f0d687c2f5c}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} justify={`center`} gap={`3`}>
  <RadixThemesSelect.Root name={`user`} size={`3`}>
  <RadixThemesSelect.Trigger placeholder={`Select a user`}/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Colin`}>
  {`Colin`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Mason`}>
  {`Mason`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesTextField.Root name={`notes`} placeholder={`Add notes`} size={`3`}/>
  <RadixThemesButton size={`3`} type={`submit`}>
  {`Set Notes`}
</RadixThemesButton>
  <Fragment>
  {isTrue(reflex___state____state__app___pages___office___admin____admin_state.notes_edit_success) ? (
  <Fragment>
  <RadixThemesCallout.Root color={`green`} css={{"icon": "check"}} size={`1`}>
  <RadixThemesCallout.Icon>
  <LucideCheckIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesCallout.Icon>
  <RadixThemesCallout.Text>
  {`Success`}
</RadixThemesCallout.Text>
</RadixThemesCallout.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixFormRoot>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(((reflex___state____state__app___main____page_state.active_tab) === ("office_phonebook"))) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`Sort By:`}
</RadixThemesText>
  <RadixThemesSelect.Root onValueChange={(_e0) => addEvents([Event("reflex___state____state.app___pages___office___office_phonebook____office_phonebook_state.set_sort", {column:_e0})], (_e0), {})} value={reflex___state____state__app___pages___office___office_phonebook____office_phonebook_state.sort_value}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content position={`popper`}>
  <RadixThemesSelect.Group>
  {``}
  {reflex___state____state__app___pages___office___office_phonebook____office_phonebook_state.column_headers.map((item, index_150381d92f8fe7a3) => (
  <RadixThemesSelect.Item key={index_150381d92f8fe7a3} value={item}>
  {item}
</RadixThemesSelect.Item>
))}
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <DebounceInput debounceTimeout={300} element={RadixThemesTextField.Root} onChange={(_e0) => addEvents([Event("reflex___state____state.app___pages___office___office_phonebook____office_phonebook_state.set_search", {text:_e0.target.value})], (_e0), {})} placeholder={`Search...`} value={reflex___state____state__app___pages___office___office_phonebook____office_phonebook_state.search_value}/>
</RadixThemesFlex>
  <RadixThemesBox css={{"width": "100%"}}>
  <RadixThemesTable.Root css={{"border": "1px solid #ccc", "padding": "10px", "width": "100%"}} variant={`ghost`}>
  <RadixThemesTable.Header>
  <RadixThemesTable.Row>
  {reflex___state____state__app___pages___office___office_phonebook____office_phonebook_state.column_headers.map((column, index_ce36259764ff8155) => (
  <RadixThemesTable.ColumnHeaderCell key={index_ce36259764ff8155} onClick={(_e) => addEvents([Event("reflex___state____state.app___pages___office___office_phonebook____office_phonebook_state.set_sort", {column:column})], (_e), {})}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {column}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Fragment>
  {isTrue(((reflex___state____state__app___pages___office___office_phonebook____office_phonebook_state.sort_value) === (column))) ? (
  <Fragment>
  {isTrue(((reflex___state____state__app___pages___office___office_phonebook____office_phonebook_state.sort_direction) === ("asc"))) ? (
  <Fragment>
  <LucideArrowUpIcon css={{"color": "var(--current-color)"}}/>
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownIcon css={{"color": "var(--current-color)"}}/>
</Fragment>
)}
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownUpIcon css={{"color": "var(--current-color)"}}/>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
))}
</RadixThemesTable.Row>
</RadixThemesTable.Header>
  <RadixThemesTable.Body>
  {reflex___state____state__app___pages___office___office_phonebook____office_phonebook_state.current_data.map((doc, index_802b2fca8dec4259) => (
  <RadixThemesTable.Row key={index_802b2fca8dec4259}>
  {Object.entries(doc).map((entry, index_c68b4c0e4a37a414) => (
  <RadixThemesTable.Cell key={index_c68b4c0e4a37a414}>
  {entry.at(1)}
</RadixThemesTable.Cell>
))}
</RadixThemesTable.Row>
))}
</RadixThemesTable.Body>
</RadixThemesTable.Root>
</RadixThemesBox>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} justify={`center`} gap={`3`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`} size={`2`}>
  {`${reflex___state____state__app___pages___office___office_phonebook____office_phonebook_state.num_items} result(s)`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(((reflex___state____state__app___main____page_state.active_tab) === ("incoming_requests"))) ? (
  <Fragment>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`8`}>
  {`Incoming Requests`}
</RadixThemesHeading>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesCard css={{"width": "40%"}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`4`}>
  {`Description`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`This page will hold any incoming client item requests. The goal is to eventually have clients be able to fill out a form that submits requests directly to this page (but that's down the line). The necessary users will be able to create requests and assign them to the shopping list of the appropriate shopper manually from here. Once a request is assigned to a shopper's list, it will leave this page and appear in the next page of the sequence - the Shopping List page.`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesCard>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`4`}>
  {`Rank`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`8/10`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesCard>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`4`}>
  {`Priority`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`High`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(((reflex___state____state__app___main____page_state.active_tab) === ("shopping_list"))) ? (
  <Fragment>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`8`}>
  {`Shopping List`}
</RadixThemesHeading>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesCard css={{"width": "40%"}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`4`}>
  {`Description`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`This is the list for personal shoppers to see the requests assigned to them. Each request will clearly state every necessary detail about the item and client for the shopper to begin their item hunt. Shoppers will only be able to see requests assigned to them along with public requests which are availlable to all shoppers (only once 30 days have passed since the request creation). Once an item is found, the request record will instruct the shopper as to how to purchase and ship. Once request is completed, the database updates accordingly and the record leaves this page and prgressed to the Order Fulfillment page.`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesCard>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`4`}>
  {`Rank`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`8/10`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesCard>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`4`}>
  {`Priority`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`High`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(((reflex___state____state__app___main____page_state.active_tab) === ("order_fulfillment"))) ? (
  <Fragment>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`8`}>
  {`Order Fulfillment`}
</RadixThemesHeading>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesCard css={{"width": "40%"}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`4`}>
  {`Description`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`This is the last page in the Order sequence. Once an item is ordered all the order fulfillment steps will be handled here. On this page, the appropriate user will be able to see incoming shipments, tracking info, client info, etc. Ultimately this page should have a feature for a user to auto-generate and print a FedEx shipping label with the proper information (down the road).`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesCard>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`4`}>
  {`Rank`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`9/10`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesCard>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} justify={`center`} gap={`3`}>
  <RadixThemesHeading size={`4`}>
  {`Priority`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`High`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</Fragment>
)}
</Fragment>
  )
}

                function Fallback({ error, resetErrorBoundary }) {
                    return (
                        <div>
  <p>
  {`Ooops...Unknown Reflex error has occured:`}
</p>
  <p css={{"color": "red"}}>
  {error.message}
</p>
  <p>
  {`Please contact the support.`}
</p>
</div>
                    );
                }
            

export default function Component() {
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
    const logFrontendError = (error, info) => {
        if (process.env.NODE_ENV === "production") {
            addEvents([Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", {
                stack: error.stack,
            })])
        }
    }
    

  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={logFrontendError}>
  <Fragment>
  <Div_ac2a89ea84667d600a059f034bd91dfe/>
  <Toaster_6e90e5e87a1cac8c96c683214079bef3/>
</Fragment>
  <Fragment_8363f1cb7b607ba411ea2c8f4c3b04df/>
  <NextHead>
  <title>
  {`App | Index`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</ErrorBoundary>
  )
}
