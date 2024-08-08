import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"reflex___state____state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "reflex___state____state.reflex___state____update_vars_internal_state": {}, "reflex___state____state.app___components___forms____form_state": {"data_type": "", "document": {}, "formatted_lists": {}, "references": {}}, "reflex___state____state.app___pages___database___profiles____profiles_state": {}, "reflex___state____state.app___components___lightbox____viewing_state": {"collection": "", "doc": {}, "is_box_open": false}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.app___pages___database___brands____brands_state": {}, "reflex___state____state.app___pages___office___office_phonebook____office_phonebook_state": {"column_headers": ["Name", "Purpose", "Phone Number", "Email Address"], "current_data": null, "num_items": null, "search_value": "", "sort_direction": "", "sort_value": ""}, "reflex___state____state.app___pages___orders___incoming_requests____incoming_requests_state": {}, "reflex___state____state.app___pages___office___office_expenses____office_expenses_state": {}, "reflex___state____state.app___pages___database___clients____clients_state": {}, "reflex___state____state.app___pages___customer_service____customer_service_state": {"column_headers": [], "current_data": null, "data": [], "inprogress_count": null, "inprogress_data": null, "new_count": null, "new_data": null, "resolved_count": null, "resolved_data": null, "search_value": "", "sort_categories": ["Priority", "Upload Date"], "sort_direction": "", "sort_value": ""}, "reflex___state____state.app___app____login_state": {"email": "", "logged_in": false, "pass_error": false, "password": "", "user": "", "user_error": false}, "reflex___state____state.app___pages___database___items____items_state": {}, "reflex___state____state.app___components___data_table____table_state": {"column_headers": [], "current_data": null, "data": [], "doc_id": null, "doc_type": "", "num_items": null, "search_value": "", "sort_direction": "", "sort_value": ""}, "reflex___state____state.app___pages___database___retailers____retailers_state": {}, "reflex___state____state.app___main____page_state": {"active_tab": "taskboard", "active_tab_variants": {"taskboard": "underline", "customer_service": "none", "analytics": "none", "retailers": "none", "products": "none", "associates": "none", "clients": "none", "brands": "none", "items": "none", "profiles": "none", "office_expenses": "none", "admin": "none", "office_phonebook": "none", "incoming_requests": "none", "shopping_list": "none", "order_fulfillment": "none"}, "dropdown": "orders", "sub_module": "order_fulfillment"}, "reflex___state____state.app___pages___taskboard____taskboard_state": {"clicked_assignee": null, "clicked_description": null, "clicked_due_date_time": null, "clicked_id": null, "clicked_status": null, "clicked_subject": null, "done_tasks": [{"id": 3, "subject": "Example 3", "assignee": "user3", "due_date_time": "2023-01-03T12:00:00", "status": "done", "description": "Detailed description of task 3"}, {"id": 6, "subject": "Example 6", "assignee": "user6", "due_date_time": "2023-01-06T15:00:00", "status": "done", "description": "Detailed description of task 6"}, {"id": 9, "subject": "Example 9", "assignee": "user9", "due_date_time": "2023-01-09T18:00:00", "status": "done", "description": "Detailed description of task 9"}, {"id": 12, "subject": "Example 12", "assignee": "user12", "due_date_time": "2023-01-12T21:00:00", "status": "done", "description": "Detailed description of task 12"}], "drawer_state": false, "in_progress_tasks": [{"id": 2, "subject": "Example 2", "assignee": "user2", "due_date_time": "2023-01-02T11:00:00", "status": "in progress", "description": "Detailed description of task 2"}, {"id": 5, "subject": "Example 5", "assignee": "user5", "due_date_time": "2023-01-05T14:00:00", "status": "in progress", "description": "Detailed description of task 5"}, {"id": 8, "subject": "Example 8", "assignee": "user8", "due_date_time": "2023-01-08T17:00:00", "status": "in progress", "description": "Detailed description of task 8"}, {"id": 11, "subject": "Example 11", "assignee": "user11", "due_date_time": "2023-01-11T20:00:00", "status": "in progress", "description": "Detailed description of task 11"}, {"id": 13, "subject": "Example 13", "assignee": "user13", "due_date_time": "2023-01-13T22:00:00", "status": "in progress", "description": "Detailed description of task 13"}], "not_started_tasks": [{"id": 1, "subject": "Example 1", "assignee": "user1", "due_date_time": "2023-01-01T10:00:00", "status": "not started", "description": "Detailed description of task 1"}, {"id": 4, "subject": "Example 4", "assignee": "user4", "due_date_time": "2023-01-04T13:00:00", "status": "not started", "description": "Detailed description of task 4"}, {"id": 7, "subject": "Example 7", "assignee": "user7", "due_date_time": "2023-01-07T16:00:00", "status": "not started", "description": "Detailed description of task 7"}, {"id": 10, "subject": "Example 10", "assignee": "user10", "due_date_time": "2023-01-10T19:00:00", "status": "not started", "description": "Detailed description of task 10"}], "values": [{"id": 1, "subject": "Example 1", "assignee": "user1", "due_date_time": "2023-01-01T10:00:00", "status": "not started", "description": "Detailed description of task 1"}, {"id": 2, "subject": "Example 2", "assignee": "user2", "due_date_time": "2023-01-02T11:00:00", "status": "in progress", "description": "Detailed description of task 2"}, {"id": 3, "subject": "Example 3", "assignee": "user3", "due_date_time": "2023-01-03T12:00:00", "status": "done", "description": "Detailed description of task 3"}, {"id": 4, "subject": "Example 4", "assignee": "user4", "due_date_time": "2023-01-04T13:00:00", "status": "not started", "description": "Detailed description of task 4"}, {"id": 5, "subject": "Example 5", "assignee": "user5", "due_date_time": "2023-01-05T14:00:00", "status": "in progress", "description": "Detailed description of task 5"}, {"id": 6, "subject": "Example 6", "assignee": "user6", "due_date_time": "2023-01-06T15:00:00", "status": "done", "description": "Detailed description of task 6"}, {"id": 7, "subject": "Example 7", "assignee": "user7", "due_date_time": "2023-01-07T16:00:00", "status": "not started", "description": "Detailed description of task 7"}, {"id": 8, "subject": "Example 8", "assignee": "user8", "due_date_time": "2023-01-08T17:00:00", "status": "in progress", "description": "Detailed description of task 8"}, {"id": 9, "subject": "Example 9", "assignee": "user9", "due_date_time": "2023-01-09T18:00:00", "status": "done", "description": "Detailed description of task 9"}, {"id": 10, "subject": "Example 10", "assignee": "user10", "due_date_time": "2023-01-10T19:00:00", "status": "not started", "description": "Detailed description of task 10"}, {"id": 11, "subject": "Example 11", "assignee": "user11", "due_date_time": "2023-01-11T20:00:00", "status": "in progress", "description": "Detailed description of task 11"}, {"id": 12, "subject": "Example 12", "assignee": "user12", "due_date_time": "2023-01-12T21:00:00", "status": "done", "description": "Detailed description of task 12"}, {"id": 13, "subject": "Example 13", "assignee": "user13", "due_date_time": "2023-01-13T22:00:00", "status": "in progress", "description": "Detailed description of task 13"}]}, "reflex___state____state.app___pages___orders___order_fulfillment____order_fulfillment_state": {}, "reflex___state____state.app___components___notifications____notification_state": {"count": 3, "data": [{"_id": 2, "Description": "Colin just made all the notifications work", "Read": false, "Date": "07/30/24 : 12:47 PM", "User": "Colin", "Upload Date": "07/30/24 : 12:47 PM", "Last Edit Date": "07/30/24 : 12:47 PM", "Created By": "Colin"}, {"_id": 3, "Description": "These notifications are sick", "Read": false, "Date": "07/30/24 : 01:13 PM", "User": "Colin", "Upload Date": "07/30/24 : 01:13 PM", "Last Edit Date": "07/30/24 : 01:13 PM", "Created By": "Colin"}, {"_id": 4, "Description": "I can just make so many of them", "Read": false, "Date": "07/30/24 : 02:20 PM", "User": "Colin", "Upload Date": "07/30/24 : 02:20 PM", "Last Edit Date": "07/30/24 : 02:20 PM", "Created By": "Colin"}], "user": "Colin"}, "reflex___state____state.app___pages___database___associates____associates_state": {}, "reflex___state____state.app___components___lightbox____editing_state": {"collection": "", "doc": {}, "is_box_open": false}, "reflex___state____state.app___components___form_fields____photo_view_state": {"file_ids": []}, "reflex___state____state.app___pages___analytics____analytics_state": {}, "reflex___state____state.app___pages___database___products____products_state": {}, "reflex___state____state.app___components___form_fields____download_state": {"files": [], "images": null, "key": ""}, "reflex___state____state.app___pages___office___admin____admin_state": {"notes_edit_success": false, "role_edit_success": false}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.app___pages___orders___shopping_list____shopping_list_state": {}, "reflex___state____state.app___components___form_fields____multi_select_state": {"open_menu": false, "selected_items": []}}

export const defaultColorMode = "system"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  reflex___state____state: createContext(null),
  reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),
  reflex___state____state__app___components___forms____form_state: createContext(null),
  reflex___state____state__app___pages___database___profiles____profiles_state: createContext(null),
  reflex___state____state__app___components___lightbox____viewing_state: createContext(null),
  reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),
  reflex___state____state__app___pages___database___brands____brands_state: createContext(null),
  reflex___state____state__app___pages___office___office_phonebook____office_phonebook_state: createContext(null),
  reflex___state____state__app___pages___orders___incoming_requests____incoming_requests_state: createContext(null),
  reflex___state____state__app___pages___office___office_expenses____office_expenses_state: createContext(null),
  reflex___state____state__app___pages___database___clients____clients_state: createContext(null),
  reflex___state____state__app___pages___customer_service____customer_service_state: createContext(null),
  reflex___state____state__app___app____login_state: createContext(null),
  reflex___state____state__app___pages___database___items____items_state: createContext(null),
  reflex___state____state__app___components___data_table____table_state: createContext(null),
  reflex___state____state__app___pages___database___retailers____retailers_state: createContext(null),
  reflex___state____state__app___main____page_state: createContext(null),
  reflex___state____state__app___pages___taskboard____taskboard_state: createContext(null),
  reflex___state____state__app___pages___orders___order_fulfillment____order_fulfillment_state: createContext(null),
  reflex___state____state__app___components___notifications____notification_state: createContext(null),
  reflex___state____state__app___pages___database___associates____associates_state: createContext(null),
  reflex___state____state__app___components___lightbox____editing_state: createContext(null),
  reflex___state____state__app___components___form_fields____photo_view_state: createContext(null),
  reflex___state____state__app___pages___analytics____analytics_state: createContext(null),
  reflex___state____state__app___pages___database___products____products_state: createContext(null),
  reflex___state____state__app___components___form_fields____download_state: createContext(null),
  reflex___state____state__app___pages___office___admin____admin_state: createContext(null),
  reflex___state____state__reflex___state____on_load_internal_state: createContext(null),
  reflex___state____state__app___pages___orders___shopping_list____shopping_list_state: createContext(null),
  reflex___state____state__app___components___form_fields____multi_select_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}

export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// Theses events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            Event(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(Event('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    Event('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export const lastCompiledTimeStamp = "2024-08-08 08:08:53.554236"

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectErrors]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
  const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const [reflex___state____state__app___components___forms____form_state, dispatch_reflex___state____state__app___components___forms____form_state] = useReducer(applyDelta, initialState["reflex___state____state.app___components___forms____form_state"])
  const [reflex___state____state__app___pages___database___profiles____profiles_state, dispatch_reflex___state____state__app___pages___database___profiles____profiles_state] = useReducer(applyDelta, initialState["reflex___state____state.app___pages___database___profiles____profiles_state"])
  const [reflex___state____state__app___components___lightbox____viewing_state, dispatch_reflex___state____state__app___components___lightbox____viewing_state] = useReducer(applyDelta, initialState["reflex___state____state.app___components___lightbox____viewing_state"])
  const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
  const [reflex___state____state__app___pages___database___brands____brands_state, dispatch_reflex___state____state__app___pages___database___brands____brands_state] = useReducer(applyDelta, initialState["reflex___state____state.app___pages___database___brands____brands_state"])
  const [reflex___state____state__app___pages___office___office_phonebook____office_phonebook_state, dispatch_reflex___state____state__app___pages___office___office_phonebook____office_phonebook_state] = useReducer(applyDelta, initialState["reflex___state____state.app___pages___office___office_phonebook____office_phonebook_state"])
  const [reflex___state____state__app___pages___orders___incoming_requests____incoming_requests_state, dispatch_reflex___state____state__app___pages___orders___incoming_requests____incoming_requests_state] = useReducer(applyDelta, initialState["reflex___state____state.app___pages___orders___incoming_requests____incoming_requests_state"])
  const [reflex___state____state__app___pages___office___office_expenses____office_expenses_state, dispatch_reflex___state____state__app___pages___office___office_expenses____office_expenses_state] = useReducer(applyDelta, initialState["reflex___state____state.app___pages___office___office_expenses____office_expenses_state"])
  const [reflex___state____state__app___pages___database___clients____clients_state, dispatch_reflex___state____state__app___pages___database___clients____clients_state] = useReducer(applyDelta, initialState["reflex___state____state.app___pages___database___clients____clients_state"])
  const [reflex___state____state__app___pages___customer_service____customer_service_state, dispatch_reflex___state____state__app___pages___customer_service____customer_service_state] = useReducer(applyDelta, initialState["reflex___state____state.app___pages___customer_service____customer_service_state"])
  const [reflex___state____state__app___app____login_state, dispatch_reflex___state____state__app___app____login_state] = useReducer(applyDelta, initialState["reflex___state____state.app___app____login_state"])
  const [reflex___state____state__app___pages___database___items____items_state, dispatch_reflex___state____state__app___pages___database___items____items_state] = useReducer(applyDelta, initialState["reflex___state____state.app___pages___database___items____items_state"])
  const [reflex___state____state__app___components___data_table____table_state, dispatch_reflex___state____state__app___components___data_table____table_state] = useReducer(applyDelta, initialState["reflex___state____state.app___components___data_table____table_state"])
  const [reflex___state____state__app___pages___database___retailers____retailers_state, dispatch_reflex___state____state__app___pages___database___retailers____retailers_state] = useReducer(applyDelta, initialState["reflex___state____state.app___pages___database___retailers____retailers_state"])
  const [reflex___state____state__app___main____page_state, dispatch_reflex___state____state__app___main____page_state] = useReducer(applyDelta, initialState["reflex___state____state.app___main____page_state"])
  const [reflex___state____state__app___pages___taskboard____taskboard_state, dispatch_reflex___state____state__app___pages___taskboard____taskboard_state] = useReducer(applyDelta, initialState["reflex___state____state.app___pages___taskboard____taskboard_state"])
  const [reflex___state____state__app___pages___orders___order_fulfillment____order_fulfillment_state, dispatch_reflex___state____state__app___pages___orders___order_fulfillment____order_fulfillment_state] = useReducer(applyDelta, initialState["reflex___state____state.app___pages___orders___order_fulfillment____order_fulfillment_state"])
  const [reflex___state____state__app___components___notifications____notification_state, dispatch_reflex___state____state__app___components___notifications____notification_state] = useReducer(applyDelta, initialState["reflex___state____state.app___components___notifications____notification_state"])
  const [reflex___state____state__app___pages___database___associates____associates_state, dispatch_reflex___state____state__app___pages___database___associates____associates_state] = useReducer(applyDelta, initialState["reflex___state____state.app___pages___database___associates____associates_state"])
  const [reflex___state____state__app___components___lightbox____editing_state, dispatch_reflex___state____state__app___components___lightbox____editing_state] = useReducer(applyDelta, initialState["reflex___state____state.app___components___lightbox____editing_state"])
  const [reflex___state____state__app___components___form_fields____photo_view_state, dispatch_reflex___state____state__app___components___form_fields____photo_view_state] = useReducer(applyDelta, initialState["reflex___state____state.app___components___form_fields____photo_view_state"])
  const [reflex___state____state__app___pages___analytics____analytics_state, dispatch_reflex___state____state__app___pages___analytics____analytics_state] = useReducer(applyDelta, initialState["reflex___state____state.app___pages___analytics____analytics_state"])
  const [reflex___state____state__app___pages___database___products____products_state, dispatch_reflex___state____state__app___pages___database___products____products_state] = useReducer(applyDelta, initialState["reflex___state____state.app___pages___database___products____products_state"])
  const [reflex___state____state__app___components___form_fields____download_state, dispatch_reflex___state____state__app___components___form_fields____download_state] = useReducer(applyDelta, initialState["reflex___state____state.app___components___form_fields____download_state"])
  const [reflex___state____state__app___pages___office___admin____admin_state, dispatch_reflex___state____state__app___pages___office___admin____admin_state] = useReducer(applyDelta, initialState["reflex___state____state.app___pages___office___admin____admin_state"])
  const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
  const [reflex___state____state__app___pages___orders___shopping_list____shopping_list_state, dispatch_reflex___state____state__app___pages___orders___shopping_list____shopping_list_state] = useReducer(applyDelta, initialState["reflex___state____state.app___pages___orders___shopping_list____shopping_list_state"])
  const [reflex___state____state__app___components___form_fields____multi_select_state, dispatch_reflex___state____state__app___components___form_fields____multi_select_state] = useReducer(applyDelta, initialState["reflex___state____state.app___components___form_fields____multi_select_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
      "reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
      "reflex___state____state.app___components___forms____form_state": dispatch_reflex___state____state__app___components___forms____form_state,
      "reflex___state____state.app___pages___database___profiles____profiles_state": dispatch_reflex___state____state__app___pages___database___profiles____profiles_state,
      "reflex___state____state.app___components___lightbox____viewing_state": dispatch_reflex___state____state__app___components___lightbox____viewing_state,
      "reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
      "reflex___state____state.app___pages___database___brands____brands_state": dispatch_reflex___state____state__app___pages___database___brands____brands_state,
      "reflex___state____state.app___pages___office___office_phonebook____office_phonebook_state": dispatch_reflex___state____state__app___pages___office___office_phonebook____office_phonebook_state,
      "reflex___state____state.app___pages___orders___incoming_requests____incoming_requests_state": dispatch_reflex___state____state__app___pages___orders___incoming_requests____incoming_requests_state,
      "reflex___state____state.app___pages___office___office_expenses____office_expenses_state": dispatch_reflex___state____state__app___pages___office___office_expenses____office_expenses_state,
      "reflex___state____state.app___pages___database___clients____clients_state": dispatch_reflex___state____state__app___pages___database___clients____clients_state,
      "reflex___state____state.app___pages___customer_service____customer_service_state": dispatch_reflex___state____state__app___pages___customer_service____customer_service_state,
      "reflex___state____state.app___app____login_state": dispatch_reflex___state____state__app___app____login_state,
      "reflex___state____state.app___pages___database___items____items_state": dispatch_reflex___state____state__app___pages___database___items____items_state,
      "reflex___state____state.app___components___data_table____table_state": dispatch_reflex___state____state__app___components___data_table____table_state,
      "reflex___state____state.app___pages___database___retailers____retailers_state": dispatch_reflex___state____state__app___pages___database___retailers____retailers_state,
      "reflex___state____state.app___main____page_state": dispatch_reflex___state____state__app___main____page_state,
      "reflex___state____state.app___pages___taskboard____taskboard_state": dispatch_reflex___state____state__app___pages___taskboard____taskboard_state,
      "reflex___state____state.app___pages___orders___order_fulfillment____order_fulfillment_state": dispatch_reflex___state____state__app___pages___orders___order_fulfillment____order_fulfillment_state,
      "reflex___state____state.app___components___notifications____notification_state": dispatch_reflex___state____state__app___components___notifications____notification_state,
      "reflex___state____state.app___pages___database___associates____associates_state": dispatch_reflex___state____state__app___pages___database___associates____associates_state,
      "reflex___state____state.app___components___lightbox____editing_state": dispatch_reflex___state____state__app___components___lightbox____editing_state,
      "reflex___state____state.app___components___form_fields____photo_view_state": dispatch_reflex___state____state__app___components___form_fields____photo_view_state,
      "reflex___state____state.app___pages___analytics____analytics_state": dispatch_reflex___state____state__app___pages___analytics____analytics_state,
      "reflex___state____state.app___pages___database___products____products_state": dispatch_reflex___state____state__app___pages___database___products____products_state,
      "reflex___state____state.app___components___form_fields____download_state": dispatch_reflex___state____state__app___components___form_fields____download_state,
      "reflex___state____state.app___pages___office___admin____admin_state": dispatch_reflex___state____state__app___pages___office___admin____admin_state,
      "reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
      "reflex___state____state.app___pages___orders___shopping_list____shopping_list_state": dispatch_reflex___state____state__app___pages___orders___shopping_list____shopping_list_state,
      "reflex___state____state.app___components___form_fields____multi_select_state": dispatch_reflex___state____state__app___components___form_fields____multi_select_state,
    }
  }, [])

  return (
    <StateContexts.reflex___state____state.Provider value={ reflex___state____state }>
    <StateContexts.reflex___state____state__reflex___state____update_vars_internal_state.Provider value={ reflex___state____state__reflex___state____update_vars_internal_state }>
    <StateContexts.reflex___state____state__app___components___forms____form_state.Provider value={ reflex___state____state__app___components___forms____form_state }>
    <StateContexts.reflex___state____state__app___pages___database___profiles____profiles_state.Provider value={ reflex___state____state__app___pages___database___profiles____profiles_state }>
    <StateContexts.reflex___state____state__app___components___lightbox____viewing_state.Provider value={ reflex___state____state__app___components___lightbox____viewing_state }>
    <StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state.Provider value={ reflex___state____state__reflex___state____frontend_event_exception_state }>
    <StateContexts.reflex___state____state__app___pages___database___brands____brands_state.Provider value={ reflex___state____state__app___pages___database___brands____brands_state }>
    <StateContexts.reflex___state____state__app___pages___office___office_phonebook____office_phonebook_state.Provider value={ reflex___state____state__app___pages___office___office_phonebook____office_phonebook_state }>
    <StateContexts.reflex___state____state__app___pages___orders___incoming_requests____incoming_requests_state.Provider value={ reflex___state____state__app___pages___orders___incoming_requests____incoming_requests_state }>
    <StateContexts.reflex___state____state__app___pages___office___office_expenses____office_expenses_state.Provider value={ reflex___state____state__app___pages___office___office_expenses____office_expenses_state }>
    <StateContexts.reflex___state____state__app___pages___database___clients____clients_state.Provider value={ reflex___state____state__app___pages___database___clients____clients_state }>
    <StateContexts.reflex___state____state__app___pages___customer_service____customer_service_state.Provider value={ reflex___state____state__app___pages___customer_service____customer_service_state }>
    <StateContexts.reflex___state____state__app___app____login_state.Provider value={ reflex___state____state__app___app____login_state }>
    <StateContexts.reflex___state____state__app___pages___database___items____items_state.Provider value={ reflex___state____state__app___pages___database___items____items_state }>
    <StateContexts.reflex___state____state__app___components___data_table____table_state.Provider value={ reflex___state____state__app___components___data_table____table_state }>
    <StateContexts.reflex___state____state__app___pages___database___retailers____retailers_state.Provider value={ reflex___state____state__app___pages___database___retailers____retailers_state }>
    <StateContexts.reflex___state____state__app___main____page_state.Provider value={ reflex___state____state__app___main____page_state }>
    <StateContexts.reflex___state____state__app___pages___taskboard____taskboard_state.Provider value={ reflex___state____state__app___pages___taskboard____taskboard_state }>
    <StateContexts.reflex___state____state__app___pages___orders___order_fulfillment____order_fulfillment_state.Provider value={ reflex___state____state__app___pages___orders___order_fulfillment____order_fulfillment_state }>
    <StateContexts.reflex___state____state__app___components___notifications____notification_state.Provider value={ reflex___state____state__app___components___notifications____notification_state }>
    <StateContexts.reflex___state____state__app___pages___database___associates____associates_state.Provider value={ reflex___state____state__app___pages___database___associates____associates_state }>
    <StateContexts.reflex___state____state__app___components___lightbox____editing_state.Provider value={ reflex___state____state__app___components___lightbox____editing_state }>
    <StateContexts.reflex___state____state__app___components___form_fields____photo_view_state.Provider value={ reflex___state____state__app___components___form_fields____photo_view_state }>
    <StateContexts.reflex___state____state__app___pages___analytics____analytics_state.Provider value={ reflex___state____state__app___pages___analytics____analytics_state }>
    <StateContexts.reflex___state____state__app___pages___database___products____products_state.Provider value={ reflex___state____state__app___pages___database___products____products_state }>
    <StateContexts.reflex___state____state__app___components___form_fields____download_state.Provider value={ reflex___state____state__app___components___form_fields____download_state }>
    <StateContexts.reflex___state____state__app___pages___office___admin____admin_state.Provider value={ reflex___state____state__app___pages___office___admin____admin_state }>
    <StateContexts.reflex___state____state__reflex___state____on_load_internal_state.Provider value={ reflex___state____state__reflex___state____on_load_internal_state }>
    <StateContexts.reflex___state____state__app___pages___orders___shopping_list____shopping_list_state.Provider value={ reflex___state____state__app___pages___orders___shopping_list____shopping_list_state }>
    <StateContexts.reflex___state____state__app___components___form_fields____multi_select_state.Provider value={ reflex___state____state__app___components___form_fields____multi_select_state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.reflex___state____state__app___components___form_fields____multi_select_state.Provider>
    </StateContexts.reflex___state____state__app___pages___orders___shopping_list____shopping_list_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____on_load_internal_state.Provider>
    </StateContexts.reflex___state____state__app___pages___office___admin____admin_state.Provider>
    </StateContexts.reflex___state____state__app___components___form_fields____download_state.Provider>
    </StateContexts.reflex___state____state__app___pages___database___products____products_state.Provider>
    </StateContexts.reflex___state____state__app___pages___analytics____analytics_state.Provider>
    </StateContexts.reflex___state____state__app___components___form_fields____photo_view_state.Provider>
    </StateContexts.reflex___state____state__app___components___lightbox____editing_state.Provider>
    </StateContexts.reflex___state____state__app___pages___database___associates____associates_state.Provider>
    </StateContexts.reflex___state____state__app___components___notifications____notification_state.Provider>
    </StateContexts.reflex___state____state__app___pages___orders___order_fulfillment____order_fulfillment_state.Provider>
    </StateContexts.reflex___state____state__app___pages___taskboard____taskboard_state.Provider>
    </StateContexts.reflex___state____state__app___main____page_state.Provider>
    </StateContexts.reflex___state____state__app___pages___database___retailers____retailers_state.Provider>
    </StateContexts.reflex___state____state__app___components___data_table____table_state.Provider>
    </StateContexts.reflex___state____state__app___pages___database___items____items_state.Provider>
    </StateContexts.reflex___state____state__app___app____login_state.Provider>
    </StateContexts.reflex___state____state__app___pages___customer_service____customer_service_state.Provider>
    </StateContexts.reflex___state____state__app___pages___database___clients____clients_state.Provider>
    </StateContexts.reflex___state____state__app___pages___office___office_expenses____office_expenses_state.Provider>
    </StateContexts.reflex___state____state__app___pages___orders___incoming_requests____incoming_requests_state.Provider>
    </StateContexts.reflex___state____state__app___pages___office___office_phonebook____office_phonebook_state.Provider>
    </StateContexts.reflex___state____state__app___pages___database___brands____brands_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state.Provider>
    </StateContexts.reflex___state____state__app___components___lightbox____viewing_state.Provider>
    </StateContexts.reflex___state____state__app___pages___database___profiles____profiles_state.Provider>
    </StateContexts.reflex___state____state__app___components___forms____form_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____update_vars_internal_state.Provider>
    </StateContexts.reflex___state____state.Provider>
  )
}